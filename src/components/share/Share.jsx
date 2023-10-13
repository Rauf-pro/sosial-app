import "./share.css";

export default function Share() {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareProfileImg" src="/assets/person/1.jpeg" alt="" />
          <input
            placeholder="What's in your mind Safak?"
            className="shareInput"
          />
        </div>
        <hr className="shareHr"/>
      </div>
    </div>
  );
}
