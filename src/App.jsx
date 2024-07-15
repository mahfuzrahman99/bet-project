import './App.css'
import SingleCard from './component/SingleCard'

function App() {

  const svgIcon_1 = (
    <span>
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
        hanging="40"
        width="40"
        fill="#0000FF"><g><path d="M0 0h24v24H0z" fill="none"/><path d="M19.375 15.103A8.001 8.001 0 0 0 8.03 5.053l-.992-1.737A9.996 9.996 0 0 1 17 3.34c4.49 2.592 6.21 8.142 4.117 12.77l1.342.774-4.165 2.214-.165-4.714 1.246.719zM4.625 8.897a8.001 8.001 0 0 0 11.345 10.05l.992 1.737A9.996 9.996 0 0 1 7 20.66C2.51 18.068.79 12.518 2.883 7.89L1.54 7.117l4.165-2.214.165 4.714-1.246-.719zM8.5 14H14a.5.5 0 1 0 0-1h-4a2.5 2.5 0 1 1 0-5h1V7h2v1h2.5v2H10a.5.5 0 1 0 0 1h4a2.5 2.5 0 1 1 0 5h-1v1h-2v-1H8.5v-2z"/></g></svg>
    </span>
  );
  const svgIcon_2 = (
    <span>
      <svg
        id="Layer_1"
        style={{ enableBackground: "new 0 0 128 128" }}
        viewBox="0 0 128 128"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        height="40"
        width="40"
        fill='#fff'
      >
        <g>
          <path d="M119,119H68v-10.8l0.6-0.3c5.7-2.3,9.4-7.7,9.4-13.8c0-4.5-2-8.7-5.6-11.6l-11.9-9.5c-1.6-1.3-2.6-3.2-2.6-5.3   c0-3.8,3.1-6.8,6.8-6.8H78v-8H68V43h-8v10.8L59.4,54c-5.7,2.3-9.4,7.7-9.4,13.8c0,4.5,2,8.7,5.6,11.6l11.9,9.5   c1.6,1.3,2.6,3.2,2.6,5.3c0,3.8-3.1,6.8-6.8,6.8H50v8h10v10H9V71H1v56h67h59V71h-8V119z"/>
          <path d="M88,1H40v18H1v42h41v-8H9V27h31h8h71v26H88v8h39V19H88V1z M80,19H48V9h32V19z"/>
        </g>
      </svg>
    </span>
  );
  const svgIcon_3 = (
    <span>
    <svg
      style={{ shapeRendering: "geometricPrecision", textRendering: "geometricPrecision", imageRendering: "optimizeQuality", fillRule: "evenodd", clipRule: "evenodd" }}
      version="1.1"
      viewBox="0 0 270.92 270.92"
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
        height="40"
        width="40"
        fill="#0000FF"
    >
      <defs>
        <style type="text/css"></style>
      </defs>
      <g id="Layer_x0020_1">
        <path className="fil0" d="M135.48 160.83c-4.8,0 -8.73,-3.91 -8.73,-8.7 0,-4.4 -3.53,-7.95 -7.93,-7.95 -4.39,0 -7.93,3.55 -7.93,7.95 0,10.75 6.99,19.83 16.65,23.15l0 4.49c0,4.38 3.55,7.95 7.94,7.95 4.38,0 7.93,-3.57 7.93,-7.95l0 -4.49c9.66,-3.32 16.65,-12.4 16.65,-23.15 0,-13.58 -11.03,-24.61 -24.58,-24.61 -4.8,0 -8.73,-3.91 -8.73,-8.71 0,-4.81 3.93,-8.72 8.73,-8.72 4.79,0 8.72,3.91 8.72,8.72 0,4.38 3.55,7.94 7.94,7.94 4.38,0 7.92,-3.56 7.92,-7.94 0,-10.77 -6.99,-19.83 -16.65,-23.16l0 -4.51c0,-4.38 -3.55,-7.94 -7.93,-7.94 -4.39,0 -7.94,3.56 -7.94,7.94l0 4.51c-9.66,3.33 -16.65,12.39 -16.65,23.16 0,13.56 11.02,24.58 24.59,24.58 4.79,0 8.72,3.91 8.72,8.74 0,4.79 -3.93,8.7 -8.72,8.7zm-69.24 46l-14.21 0c-10.9,-0.24 -19.72,-9.16 -19.72,-20.13l0 -13.76c17.12,3.25 30.66,16.79 33.93,33.89zm172.4 -33.89l0 13.76c0,10.97 -8.81,19.89 -19.7,20.13l-14.26 -0.01c3.27,-17.1 16.84,-30.65 33.96,-33.88zm-33.96 -108.91l13.79 0c11.1,0 20.14,9.04 20.16,20.14l-0.01 13.75c-17.11,-3.26 -30.67,-16.79 -33.94,-33.89zm17.56 -15.86l-170.55 0c-4.38,0 -7.94,3.56 -7.94,7.93 0,4.37 3.56,7.93 7.94,7.93l136.97 0c3.57,25.85 24.1,46.38 49.98,49.91l0 42.99c-25.9,3.54 -46.44,24.08 -49.98,49.95l-106.4 0c-3.54,-25.87 -24.06,-46.39 -49.95,-49.95l0 -73.49c0,-4.39 -3.56,-7.94 -7.94,-7.94 -4.39,0 -7.94,3.55 -7.94,7.94l0 82.36c0,0.13 -0.02,0.25 -0.02,0.4l0 24.24c0,17.79 14.47,32.27 32.28,32.27l3.34 0c0.15,0 0.3,0.04 0.45,0.04l165.99 0c0.15,0 0.31,-0.04 0.47,-0.04l3.3 0c17.81,0 32.27,-14.48 32.27,-32.27l0 -110.02c0,-17.77 -14.46,-32.25 -32.27,-32.25z"/>
      </g>
    </svg>
  </span>
  );
  const svgIcon_4 = (
    <span>
      <svg height="40" viewBox="0 0 24 24" width="40" xmlns="http://www.w3.org/2000/svg" fill='#0000FF'><path className="heroicon-ui" d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm1-11v2h1a3 3 0 0 1 0 6h-1v1a1 1 0 0 1-2 0v-1H8a1 1 0 0 1 0-2h3v-2h-1a3 3 0 0 1 0-6h1V6a1 1 0 0 1 2 0v1h3a1 1 0 0 1 0 2h-3zm-2 0h-1a1 1 0 1 0 0 2h1V9zm2 6h1a1 1 0 0 0 0-2h-1v2z"/></svg>
    </span>
  );

  return (
    <div className='md:grid grid-cols-4 gap-5 md:w-[80vw] my-5 md:my-12 mx-auto'>

       <SingleCard icon={svgIcon_1} HBgColor={""} HTextColor={""} title={"Free Plan"} ammount={"20"} postAmmount={"3"} tamplate={"100"} category={"No"} storage={"20"} word={"500"} BtnBg={"#fff"} BtnText={""} BtnBorder={"#4A2BF2"} UpTo={"Free Up To"}/>

       <SingleCard icon={svgIcon_2} HBgColor={"#0000FF"} HTextColor={"#fff"} title={"Standerd Plan"} ammount={"20"} postAmmount={"20"} tamplate={"300"} category={""} storage={"20"} word={"1000"} BtnBg={"#4A2BF2"} BtnText={"#fff"} BtnBorder={"#4A2BF2"} isBadge={true}/>

       <SingleCard icon={svgIcon_3} HBgColor={""} HTextColor={""} title={"Advanced Plan"} ammount={"20"} postAmmount={"50"} tamplate={"500"} category={"Premiume"} storage={"20"} word={"3000"} BtnBg={"#fff"} BtnText={""} BtnBorder={"#4A2BF2"}/>

       <SingleCard icon={svgIcon_4} HBgColor={""} HTextColor={""} title={"Pro Plan"} ammount={"20"} postAmmount={"Unlimited"} tamplate={"1000"} category={"Premiume"} storage={"20"} word={"Unlimited"} BtnBg={"#fff"} BtnText={""} BtnBorder={"#4A2BF2"}/>

    </div>
  )
}

export default App
