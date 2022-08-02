import React, { useState } from "react";
import "../style/Vote.css";
import Select from "react-select";

function Vote() {
  const [name, setName] = useState("");
  const [point, setPoint] = useState();
  const [option, setOption] = useState();

  //console.log(allOptions)
  const Options = [
    {
      label: "the office",
    },
    {
      label: "Rick And Morty",
    },
    {
      label: "Bojack Horseman",
    },
    {
      label: "Trailer Park Boys",
    },
    {
      label: "Shrek",
    },
    {
      label: "F.R.I.E.N.D.S",
    },
  ];

  const [allvoter, setAllvoter] = useState([]);

  const [ofiiceBank, setOfficeBank] = useState(0);
  const [rickBank, setRickBank] = useState(0);
  const [bojackBank, setBojackBank] = useState(0);
  const [parkBank, setParkBank] = useState(0);
  const [sherkBank, setSherkBank] = useState(0);
  const [frndBank, setFrndBank] = useState(0);

  const handleSelect = (e) => {
    setOption(e.label);
  };

  const givepoint = () => {
    if (name.length !== 0 && point.length !== 0) {
      setAllvoter((newdata) => [...newdata, { name, point, option }]);
      if (option === "Rick And Morty") {
        setRickBank(parseInt(point) + rickBank);
      }
      if (option === "the office") {
        setOfficeBank(parseInt(point) + ofiiceBank);
      }
      if (option === "Bojack Horseman") {
        setBojackBank(parseInt(point) + bojackBank);
      }
      if (option === "Trailer Park Boys") {
        setParkBank(parseInt(point) + parkBank);
      }
      if (option === "Shrek") {
        setSherkBank(parseInt(point) + sherkBank);
      }
      if (option === "F.R.I.E.N.D.S") {
        setFrndBank(parseInt(point) + frndBank);
      }
    }
  };

  console.log(allvoter);

  return (
    <div>
      <div class="container  text-center">
        <div class="row">
          <div class="col ">
            <div class="p-3 bg-secondary ">
              <h3>Voting Booth</h3>

              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label float-start">
                  Your Name
                </label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div class="mb-3">
                <label
                  for="exampleInputPassword1"
                  class="form-label float-start"
                >
                  Point
                </label>
                <input
                  value={point}
                  onChange={(e) => setPoint(e.target.value)}
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div class="mb-3">
                <div class="task_item__xjnUW">
                  <label for="option" className="form-label float-start">
                    Option
                  </label>
                  <br />
                  <Select
                    className="form-control p-0"
                    options={Options}
                    onChange={handleSelect}
                  />
                </div>
              </div>
              <button class=" form-control btn btn-warning" onClick={givepoint}>
                Give Points 
              </button>
            </div>
          </div>
       
          <div class="col">
            <div class="p-3 bg-secondary">
              <h3>Leaderboard</h3>
            </div>
            <div class="container text-center">
  <div class="row mt-0">
    <div class="col card bg-light me-1 ">
      <h4 className="mt-2 text-danger">{ofiiceBank}</h4>
      <hr/>
      <h4>The Office</h4>
    </div>
    <div class="col card bg-light me-1  order-5">
    <h4 className="mt-2 text-danger">{rickBank}</h4>
      <hr/>
      <h4>Rick and Morty</h4>
    </div>
    <div class="col card bg-light me-1  order-1">
    <h4 className="mt-2 text-danger">{frndBank}</h4>
      <hr/>
      <h4>F.R.I.E.N.D.S</h4>
    </div>
  </div>
  <div class="row mt-4">
    <div class="col card bg-light me-1 ">
    <h4 className="mt-2 text-danger ">{bojackBank}</h4>
      <hr/>
      <h5 className="fw-bolder">Bojack Horseman</h5>
    </div>
    <div class="col card bg-light me-1  order-5">
    <h4 className="mt-2 text-danger" >{parkBank}</h4>
      <hr/>
      <h4>Trailer Park Boys</h4>
    </div>
    <div class="col card bg-light me-1  order-1">
    <h4 className="mt-2 text-danger">{sherkBank}</h4>
      <hr/>
      <h4>Shrek</h4>
    </div>
  </div>
</div> 
          
            
          </div>
        </div>
      </div>

      <div class="p-0  bg-secondary mt-4">
        <h3>All Votes</h3>
      </div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col" className="text text-warning">
              Voter
            </th>
            <th scope="col" className="text text-warning">
              Option
            </th>
            <th scope="col" className="text text-warning">
              Points
            </th>
          </tr>
        </thead>
      </table>
      {allvoter.map((val) => (
        <div className="row" id='row'>
    <div className="col p-0 mb-0 ">
      <div className="card-body bg-dark p-0 text-white text-center ">
      
        <ul className="list-group ">
          <li id='hover' className="list-group-item bg-dark p-0 text-white text-center ">
          {val.name}
          </li>
        </ul>
        <hr />
        
      </div>
    </div>
    <div className="col p-0 mb-0">
      <div className="card-body bg-dark p-0 text-white text-center ">
        <ul className="list-group">
          <li id='hover' className="list-group-item bg-dark p-0 text-white text-center">
          {val.point}
          </li>
         
        </ul>
        <hr/>
     
      </div>
    </div>
    <div className="col p-0 mb-0">
      <div className="card-body bg-dark p-0 text-white text-center">
        <ul className="list-group">
          <li id='hover' className="list-group-item bg-dark p-0 text-white text-center">
          {val.option}
          </li>
        </ul>
        <hr />
      </div>
    </div>
  </div>
      ))}
    
    </div>
  );
}

export default Vote;
