import streamlit as st
import pandas as pd
import plotly.express as px

# ----------------------
# Load Data
# ----------------------
@st.cache_data
def load_data():
    df_chat = pd.read_csv("elyx_chat.csv")
    df_bio = pd.read_csv("biomarkers.csv")
    df_wear = pd.read_csv("wearable_data.csv")

    # Convert dates
    df_chat["datetime"] = pd.to_datetime(df_chat["datetime"])
    df_bio["date"] = pd.to_datetime(df_bio["date"])
    df_wear["date"] = pd.to_datetime(df_wear["date"])

    return df_chat, df_bio, df_wear


df_chat, df_bio, df_wear = load_data()

# ----------------------
# Dashboard Layout
# ----------------------
st.set_page_config(page_title="Elyx Member Journey Dashboard", layout="wide")

st.title("📊 Elyx Member Journey Dashboard")
st.write("Visualizing Rohan Patel’s 8-month health journey with chat, biomarkers, and wearables.")

# ----------------------
# Tabs
# ----------------------
tab1, tab2, tab3, tab4 = st.tabs(["💬 Chat History", "🧪 Biomarkers", "⌚ Wearables", "📅 Timeline"])


# ----------------------
# Tab 1: Chat History  ✅ DO NOT CHANGE
# ----------------------
with tab1:
    st.subheader("💬 Member ↔ Elyx Chat")
    st.write("Scroll through the simulated WhatsApp-style messages.")

    chat_container = st.container()

    chat_bubble_style = """
    <style>
    .chat-bubble {
        padding: 10px 14px;
        border-radius: 12px;
        margin: 5px;
        max-width: 70%;
        word-wrap: break-word;
        font-size: 14px;
        color: black; /* text now visible */
    }
    .member {
        background-color: #dcf8c6; /* WhatsApp green */
        margin-left: auto;
        text-align: right;
    }
    .elyx {
        background-color: #e6f2ff; /* light blue */
        margin-right: auto;
        text-align: left;
    }
    .chat-meta {
        font-size: 11px;
        color: #555;
    }
    </style>
    """
    st.markdown(chat_bubble_style, unsafe_allow_html=True)

    for i, row in df_chat.iterrows():
        anchor = f"chat_{i}"
        if row["role"] == "Member":
            chat_container.markdown(
                f"<div id='{anchor}' class='chat-bubble member'>"
                f"<b>{row['sender']}</b><br>{row['message']}<br>"
                f"<span class='chat-meta'>{row['datetime']}</span></div>",
                unsafe_allow_html=True
            )
        else:
            chat_container.markdown(
                f"<div id='{anchor}' class='chat-bubble elyx'>"
                f"<b>{row['sender']}</b><br>{row['message']}<br>"
                f"<span class='chat-meta'>{row['datetime']}</span></div>",
                unsafe_allow_html=True
            )


# ----------------------
# Tab 2: Biomarkers (Graphs)
# ----------------------
with tab2:
    st.subheader("🧪 Biomarker Trends")

    # Cholesterol, HbA1c, CRP
    fig_bio = px.line(
        df_bio,
        x="date",
        y=["cholesterol", "hba1c", "crp"],
        markers=True,
        title="Cholesterol, HbA1c & CRP over time"
    )
    st.plotly_chart(fig_bio, use_container_width=True)

    # Blood Pressure
    fig_bp = px.line(
        df_bio,
        x="date",
        y=["bp_systolic", "bp_diastolic"],
        markers=True,
        title="Blood Pressure Trends"
    )
    st.plotly_chart(fig_bp, use_container_width=True)


# ----------------------
# Tab 3: Wearables (Graphs)
# ----------------------
with tab3:
    st.subheader("⌚ Wearable Data Trends")

    # Daily steps
    fig_steps = px.line(
        df_wear,
        x="date",
        y="steps",
        title="Daily Steps",
        markers=True
    )
    st.plotly_chart(fig_steps, use_container_width=True)

    # Sleep duration
    fig_sleep = px.line(
        df_wear,
        x="date",
        y="sleep_hours",
        title="Sleep Duration (hrs)",
        markers=True
    )
    st.plotly_chart(fig_sleep, use_container_width=True)


# ----------------------
# Tab 4: Timeline (Events as Plot)
# ----------------------
with tab4:
    st.subheader("📅 Health Journey Timeline")

    events = []
    for i, row in df_chat.iterrows():
        if row.get("message_type", "") == "plan_update":
            events.append({"date": row["datetime"].date(), "event": "Plan Update"})
    for i, row in df_bio.iterrows():
        events.append({"date": row["date"].date(), "event": f"Diagnostic: {row['notes']}"})
    for i, row in df_wear.iterrows():
        if row["steps"] < 6000:
            events.append({"date": row["date"].date(), "event": "Travel Week"})

    if events:
        df_events = pd.DataFrame(events)
        fig_timeline = px.scatter(
            df_events,
            x="date",
            y=["event"],
            title="Timeline of Key Events",
            labels={"event": "Event"},
            color="event",
            symbol="event"
        )
        st.plotly_chart(fig_timeline, use_container_width=True)
    else:
        st.info("No events detected in the current dataset.")

