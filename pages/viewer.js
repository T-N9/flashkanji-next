import React, { useEffect, useState } from "react";
import Head from "next/head";
import KanjiViewer from "@/public/js/kanjiviewer";
import { getUrlVars } from "@/public/js/kanjivg";
import {
  getShowGroups,
  getShowRadicals,
  getNoShowSO,
} from "@/public/js/kanjiviewer";
import { Input, Button, Checkbox } from "@material-tailwind/react";

const Viewer = () => {
  const [kanji, setKanji] = useState("");
  const [displayOrders, setDisplayOrders] = useState(true);
  const [radicals, setRadicals] = useState(false);
  const [colorGroups, setColorGroups] = useState(false);

  useEffect(() => {
    const urlVars = getUrlVars();
    const initialKanji = urlVars["kanji"] || "";
    setKanji(initialKanji);

    const file = urlVars["file"];
    const cg = getShowGroups();
    const rad = getShowRadicals();
    const noso = getNoShowSO();

    if (cg) setColorGroups(true);
    if (rad) setRadicals(true);
    if (noso) setDisplayOrders(false);

    KanjiViewer.initialize(
      "kanjiViewer",
      displayOrders,
      radicals,
      colorGroups,
      initialKanji,
      file
    );
  }, []);

  const handleKanjiChange = (event) => {
    setKanji(event.target.value.split('')[0]);
    // console.log(event.target.value.split('')[0]);
  };

  const handleCheckboxChange = (event) => {
    const checkboxName = event.target.name;

    switch (checkboxName) {
      case "displayOrders":
        setDisplayOrders(event.target.checked);
        break;
      case "radicals":
        setRadicals(event.target.checked);
        break;
      case "colorGroups":
        setColorGroups(event.target.checked);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    KanjiViewer.setStrokeOrdersVisible(displayOrders);
    KanjiViewer.setRadicals(radicals);
    KanjiViewer.setColorGroups(colorGroups);
    KanjiViewer.setKanji(kanji);
    KanjiViewer.refreshKanji();
  };

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Viewer - KanjiVG</title>
        <meta name="author" content="Ulrich Apel" />
        <meta
          name="description"
          content="A JavaScript viewer for the KanjiVG kanji vector graphics"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/css/application.css" />
      </Head>
      <div className="relative gap-5 flex bg-light min-h-screen flex-col items-center p-4">
        <form
          id="kanjiViewerParams"
          action="#"
          className="form-horizontal"
          onSubmit={handleSubmit}
        >
          <fieldset>
            <div
              id="viewer-controls"
              className="flex flex-col lg:flex-row justify-between items-center gap-5"
            >
              <div id="kanji-etc">
                <div>
                  <label htmlFor="kanji">Kanji</label>
                  <Input
                    className="viewer-input bg-white"
                    type="text"
                    value={kanji}
                    id="kanji"
                    label="e.g. 線"
                    onChange={handleKanjiChange}
                  />
                </div>
              </div>
              <div id="kanji-options" className="flex flex-col">
                <Checkbox
                  type="checkbox"
                  color="blue"
                  name="displayOrders"
                  id="displayOrders"
                  checked={displayOrders}
                  onChange={handleCheckboxChange}
                  label="Display stroke order"
                />

                <Checkbox
                  type="checkbox"
                  color="blue"
                  name="radicals"
                  id="radicals"
                  checked={radicals}
                  onChange={handleCheckboxChange}
                  label="Show radicals"
                />

                <Checkbox
                  type="checkbox"
                  color="blue"
                  name="colorGroups"
                  id="colorGroups"
                  checked={colorGroups}
                  onChange={handleCheckboxChange}
                  label="Show component groups"
                />
              </div>
              <div id="kanji-actions" className="flex flex-row lg:flex-col gap-3">
                {/* <input type="submit" value="Redraw" /> */}
                {/* &nbsp; */}

                <Button
                  id="submit"
                  variant="gradient"
                  className="kanjivg-button bg-info rounded-full"
                  type="submit"
                >
                  Load
                </Button>
                <Button
                  id="animate"
                  data-kanjivg-target="#kanji-svg"
                  variant="gradient"
                  className="kanjivg-button bg-gradient-radial rounded-full"
                >
                  Animate
                </Button>
              </div>
            </div>
          </fieldset>
        </form>
        <div
          id="kanji-visuals"
          className=" flex flex-col md:flex-row gap-5 justify-center bg-white rounded shadow-lg py-4"
        >
          <div id="kanji-image" className="flex-4"></div>
          <div id="sub-images" className="flex-4 flex flex-col gap-3">
            <div id="radical-images"></div>
            <div
              id="group-images"
              className="grid grid-cols-2 lg:grid-cols-3 gap-4"
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Viewer;
