/** @format */
// fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import BASE_URL from "../utils/base";

export default function Result(props) {
  console.log(props);

  // const [play, setPlay] = useState(false);
  const [id, setId] = useState(0);

  const playAudio = (audio, id) => {
    console.log(audio);
    setId(null);
    // play audio
    const audio_src = `${BASE_URL}/storage/audio/${audio}`;
    const myAudio = new Audio(audio_src);
    myAudio.play();
    myAudio.onplaying = function () {
      setId(id);
    };
    // if audio is paused
    myAudio.onpause = function () {
      setId(null);
    };
  };
  const { bahasa } = props;
  return (
    <div className="mt-2">
      <ul className="list-none" id="audio">
        {props.data.map((item, index) => {
          return (
            <li
              onClick={
                bahasa === "Indonesia"
                  ? () => {
                      playAudio(item.waropen.audio, item.id);
                    }
                  : null
              }
              className="bg-my-abu-100 rounded-lg p-1 my-1"
              key={index}
            >
              <span className="text-my-abu-300 block text-sm">
                {bahasa === "Indonesia"
                  ? item.indonesia.bhs_indonesia
                  : item.waropen.bhs_waropen}
              </span>
              <span className="text-my-abu-300 font-bold">
                {bahasa === "Indonesia"
                  ? item.waropen.bhs_waropen
                  : item.indonesia.bhs_indonesia}
              </span>
              {bahasa === "Indonesia" ? (
                <span className="float-right">
                  <FontAwesomeIcon
                    icon={id === item.id ? faPause : faPlay}
                    className="text-my-abu-300 mr-3"
                  />
                </span>
              ) : null}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
