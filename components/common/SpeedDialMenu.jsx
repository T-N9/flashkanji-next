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
import useContainer from "../flash_ground/useContainer";

export function SpeedDialMenu({ mode = 1 }) {
  const { dispatch, toggleFlashModal, toggleSetting, toggleJukugoModal } =
    useContainer();

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
            <SpeedDialAction
              onClick={() => {
                switch (mode) {
                  case 1:
                    dispatch(toggleFlashModal());
                    break;
                  case 2:
                    dispatch(toggleJukugoModal());
                    break;
                  default:
                    break;
                }
              }}
            >
              <PiSlideshowBold size={20} />
            </SpeedDialAction>

            {mode === 1 && (
              <SpeedDialAction onClick={() => dispatch(toggleSetting())}>
                <IoMdSettings size={20} />
              </SpeedDialAction>
            )}
          </SpeedDialContent>
        </SpeedDial>
      </div>
    </>
  );
}
