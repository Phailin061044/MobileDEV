import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import NavBar from "../component/Navbar";
import Header from "../component/Header";
import SearchItem from "../component/SearchItem";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false); //คลิกวันที่หรือยัง
  const [date, setDate] = useState([
    //เลือกวันที่ สิ่งที่เก็บอยู่ใน state
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [options, setOptions] = useState({
    //สิ่งที่เก็บใน state
    adult: 2,
    children: 0,
    room: 1,
  });
  return (
    <div>
      <NavBar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle"> Search </h1>
            <div className="lsItem">
              <label> Destination </label>
              <input placeholder={destination} type={"text"} />
            </div>
            <div className="lsItem">
              <label> Check - in Date </label>
              <span
                onClick={() => {
                  setOpenDate(!openDate);
                }}
              >
                
                {`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(
                  date[0].endDate,
                  "dd/MM/yyyy"
                )}`}
              </span>
              {openDate && (
                <DateRange
                  editableDateInputs={true}
                  onChange={(item) => setDate([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={date}
                  className="date"
                  minDate={new Date()}
                />
              )}
            </div>
            <div className="lsItem">
              <label> Options </label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    per night 
                  </span>
                  <input type="number" className="lsOptionsInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                     Adult 
                  </span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionsInput"
                    placeholder={options.adult}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                     Children
                  </span>
                  <input
                    type="number"
                    min={0}
                    className="lsOptionsInput"
                    placeholder={options.children}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                   Room 
                  </span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionsInput"
                    placeholder={options.room}
                  />
                </div>
              </div>
            </div>
            <button>Search</button>
          </div>
          <div className="listResult">
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default List;
