export function Card_info ({title, desc}) {
    return (
        <>
        <a href="#price">
        <div className="card">
            <h3>{title}</h3>
            <p>{desc}</p>
        </div>
        </a>
        </>
    )
}