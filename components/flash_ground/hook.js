import { useState, useEffect } from "react";

import {
    randomData,
    fetchAll,
    fetchByChapter,
    fetchByLevel,
    shuffleAll,
  } from "@/services/fetchers";

const Hook = () => {
    const n5NoChapters = Array.from({ length: 11 }, (_, index) => index + 1);
    const n4NoChapters = Array.from({ length: 20 }, (_, index) => index + 1);
  
    const [kanji, setKanji] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [level, setLevel] = useState(5);
    const [noChapters, setNoChapters] = useState(n5NoChapters);
  
    const [selectedLevel, setSelectedLevel] = useState("");
    const [selectedChapter, setSelectedChapter] = useState("");
  
    const fetchAllData = async () => {
      setIsLoading(true);
      try {
        let allData = await fetchAll();
        setKanji(allData);
        setIsLoading(false);
      } catch (error) {
        // Handle errors if needed
        setIsLoading(false);
      }
    };
    useEffect(() => {
      fetchAllData();
    }, []);
  
    const shuffleNowData = async (data, count) => {
      const shuffledKanji = data.slice();
      for (let i = shuffledKanji.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledKanji[i], shuffledKanji[j]] = [
          shuffledKanji[j],
          shuffledKanji[i],
        ];
      }
      setKanji(shuffledKanji.slice(0, count));
    };
  
    const shuffleAllData = async () => {
      setIsLoading(true);
      try {
        let allData = await shuffleAll();
        setKanji(allData);
        setIsLoading(false);
      } catch (error) {
        // Handle errors if needed
        setIsLoading(false);
      }
    };
  
    const fetchByChapterData = async (chapter, level) => {
      setIsLoading(true);
      try {
        if (chapter > 0) {
          let allData = await fetchByChapter(chapter, level);
          setKanji(allData);
          setIsLoading(false);
        } else {
          fetchAllData();
          setIsLoading(false);
        }
      } catch (error) {
        // Handle errors if needed
      }
    };
  
    const fetchByLevelData = async (level) => {
      setIsLoading(true);
      switch (level) {
        case 5:
          setNoChapters(n5NoChapters);
          setLevel(5);
          break;
        case 4:
          setNoChapters(n4NoChapters);
          setLevel(4);
          break;
        default:
          break;
      }
  
      try {
        let allData = await fetchByLevel(level);
        setKanji(allData);
        setIsLoading(false);
      } catch (error) {
        // Handle errors if needed
        setIsLoading(false);
      }
  
      setIsLoading(false);
    };
  
    const getRandomData = async (count) => {
      setIsLoading(true);
      try {
        let allData = await randomData(count);
        setKanji(allData);
        setIsLoading(false);
      } catch (error) {
        // Handle errors if needed
        setIsLoading(false);
      }
    };
    return {
        n4NoChapters,
        n5NoChapters,
        noChapters,
        kanji,
        isLoading,
        level,
        selectedLevel,
        selectedChapter,

        /* actions */
        setLevel,
        setNoChapters,
        setSelectedChapter,
        setSelectedLevel,
        shuffleNowData,
        shuffleAllData,
        fetchByChapterData,
        fetchByLevelData,
        getRandomData
    }
}

export default Hook;
