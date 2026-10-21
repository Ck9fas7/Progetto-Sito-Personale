import { Button } from "../../Button"
export function Card_price ({title, desc, price, period}) {
    const list_features=desc.split(",")
    return (
        <>
        <div className="price">
            <h3><b>{title}</b></h3>
            <h2>{price}<span className="pricebuss">{period}</span></h2>
            <Button message={title} alt={{ width: "20px"}}/>
            <div class="divider"><span>FEATURES</span></div>
            <ul class="features">
                {Array.from({length:list_features.length}, (_, i) => (
                    <li>{list_features[i]}</li>
                ))}
            </ul>
        </div>
        </>
    )
}