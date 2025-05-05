type CardProps = {
    title: string
    children: React.ReactNode
    className?: string
  }
  
  export default function Card({ title, children, className = "" }: CardProps) {
    return (
      <div className={`p-6 border rounded-lg shadow bg-white ${className}`}>
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <div>{children}</div>
      </div>
    )
  }
  