export default function Card({ title, action, children, className = '' }) {
  return (
    <section className={`surface p-5 ${className}`}>
      <div className="flex items-center justify-between mb-4">
        {title && <h3 className="text-lg font-semibold">{title}</h3>}
        {action}
      </div>
      {children}
    </section>
  );
}
