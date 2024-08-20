export default function Main (props) {
  const {data} = props
    return (
        <div className="imgContainer">
        <img className="bgImage" src ={data.url} alt={data.title || "moon-surface.jpg"}/>
        </div>
    )
}