import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";

/* Icons */
import { PiSlideshowBold } from "react-icons/pi";
import { IoMdSettings } from "react-icons/io";
import { GoPlus } from "react-icons/go";
import { AiOutlineMenu } from "react-icons/ai";

/* Hook */
import useContainer from "../flash_ground/useContainer";

export function SpeedDialMenu({ mode = 1 }) {
  const { dispatch, toggleFlashModal, toggleSetting, toggleJukugoModal } =
    useContainer();

  return (
    <>
      {/* <div className="fixed bottom-10 right-5 z-50">
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
      </div> */}
      <div className="fixed bottom-10 right-10 z-50">
        <Dropdown>
          <DropdownTrigger>
            <Button
              isIconOnly
              variant="solid"
              color="primary"
              className="bg-gradient-radial rounded-full w-[50px] h-[50px]"
            >
              <AiOutlineMenu size={20} />
            </Button>
          </DropdownTrigger>
          <DropdownMenu aria-label="Static Actions">
            <DropdownItem key="slider">
              <div
                className="flex justify-between"
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
                <span>Open slide</span> <PiSlideshowBold size={15} />
              </div>
            </DropdownItem>
            <DropdownItem key="copy">
              {mode === 1 && (
                <div
                  className="flex justify-between"
                  onClick={() => dispatch(toggleSetting())}
                >
                  <span>Toggle setting</span>
                  <IoMdSettings size={20} />
                </div>
              )}
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    </>
  );
}
