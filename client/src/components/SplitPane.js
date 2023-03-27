import React, {
  createRef,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

import SplitPaneContext from "./SplitPaneContext";
import Map from "./map";
import Chart from "./chart";

const SplitPane = ({ children, ...props }) => {
  const [clientHeight, setClientHeight] = useState(null);
  const [clientWidth, setClientWidth] = useState(null);
  const yDividerPos = useRef(null);
  const xDividerPos = useRef(null);

  const onMouseHoldDown = (e) => {
    yDividerPos.current = e.clientY;
    xDividerPos.current = e.clientX;
  };

  const onMouseHoldUp = () => {
    yDividerPos.current = null;
    xDividerPos.current = null;
  };

  const onMouseHoldMove = (e) => {
    if (!yDividerPos.current && !xDividerPos.current) {
      return;
    }

    setClientHeight(clientHeight + e.clientY - yDividerPos.current);
    setClientWidth(clientWidth + e.clientX - xDividerPos.current);

    yDividerPos.current = e.clientY;
    xDividerPos.current = e.clientX;
  };

  useEffect(() => {
    document.addEventListener("mouseup", onMouseHoldUp);
    document.addEventListener("mousemove", onMouseHoldMove);

    return () => {
      document.removeEventListener("mouseup", onMouseHoldUp);
      document.removeEventListener("mousemove", onMouseHoldMove);
    };
  });

  return (
    <div {...props}>
      <SplitPaneContext.Provider
        value={{
          clientHeight,
          setClientHeight,
          clientWidth,
          setClientWidth,
          onMouseHoldDown,
        }}
      >
        {children}
      </SplitPaneContext.Provider>
    </div>
  );
};

export const Divider = (props) => {
  const { onMouseHoldDown } = useContext(SplitPaneContext);

  return <div {...props} onMouseDown={onMouseHoldDown} />;
};


export const SplitPaneLeft = (props) => {
  const topRef = createRef();
  const { clientWidth, setClientWidth } = useContext(SplitPaneContext);

  useEffect(() => {
    if (!clientWidth) {
      setClientWidth(topRef.current.clientWidth);
      return;
    }

    topRef.current.style.minWidth = clientWidth + "px";
    topRef.current.style.maxWidth = clientWidth + "px";
  });

      //IMPORT DRIVER DATA FROM DJANGO SERVER
      const [driver_data, setDriverData] = useState();

      // Fetch data --> 1.)
      useEffect(() => {
    
          fetch(`http://127.0.0.1:8000/api/driver/`, {
              method: 'GET',
              headers: {
                  'Content-Type': 'application/json',
              },
          })
          .then((res) => res.json())
          .then((data) => {
              const value = data;
              localStorage.setItem('driver', JSON.stringify(value));
              setDriverData(JSON.stringify(value));
            });
    
      }, [setDriverData]);
    
      const drivers = JSON.parse(localStorage.getItem('driver'));
    

  return (<div {...props} className="split-pane-left" ref={topRef}>
    <Chart drivers={drivers}/>
    <br>
    </br>
    <br>
    </br>
    <div class="row">
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title"><b>Accident Prone Areas</b></h5>
        <ul class="list-group">
  <li class="list-group-item ">SW 34th Street</li>
  <li class="list-group-item">Target Parking Lot</li>
</ul>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title"><b>Investigation Agencies</b></h5>
        <ul class="list-group">
  <li class="list-group-item ">Gainesville Police Dept.</li>
  <li class="list-group-item">Florida Highway Patrol</li>
</ul>
      </div>
    </div>
  </div>
</div>
  </div>)
};

export const SplitPaneRight = (props) => {
  return (
    <div {...props} className="split-pane-right">
      <div className="quote">
        <Map/>
      </div>
    </div>
  );
};

export default SplitPane;
