import "./Loading.scss";


export default function Loading() {

  return (
    <div className="loading" >
        <div className="loading-container">
            <div className="spinner"></div>
            <img src="/images/logo.png" className="logo" alt="logo"/>
        </div>
    </div>
  );
}