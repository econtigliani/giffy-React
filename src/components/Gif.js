export default function Gif({title, id, url}) {
    return (
        <div>
            <h4>{title}</h4>
            <img alt={title} src={url} />
        </div>
    )
}