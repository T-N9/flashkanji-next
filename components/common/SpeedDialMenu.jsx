import {
  IconButton,
  SpeedDial,
  SpeedDialHandler,
  SpeedDialContent,
  SpeedDialAction,
} from "@material-tailwind/react";

/* Icons */
import { PiSlideshowBold } from "react-icons/pi";
import { IoMdSettings } from "react-icons/io";
import { GoPlus } from "react-icons/go";

/* Hook */
import Hook from "../flash_ground/hook";

export function SpeedDialMenu() {
  const { dispatch, toggleFlashModal, toggleSetting } = Hook();

  return (
    <>
      <div className="fixed bottom-10 right-5 z-50">
        <SpeedDial>
          <SpeedDialHandler>
            <IconButton size="lg" className="rounded-full bg-gradient-radial">
              <GoPlus
                size={20}
                className="transition-transform group-hover:rotate-45"
              />
            </IconButton>
          </SpeedDialHandler>
          <SpeedDialContent>
            <SpeedDialAction onClick={() => dispatch(toggleFlashModal())}>
              <PiSlideshowBold size={20} />
            </SpeedDialAction>
            <SpeedDialAction onClick={() => dispatch(toggleSetting())}>
              <IoMdSettings size={20} />
            </SpeedDialAction>
          </SpeedDialContent>
        </SpeedDial>
      </div>
    </>
  );
}
