/* These actions are done from KanjiAPI | kanjiappi.dev */

export const fetchCharData = async (char) => {
  try {
    const response = await fetch(`https://kanjiapi.dev/v1/kanji/${char}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching Kanji data:", error);
    throw error;
  }
};

export const fetchWordData = async (char) => {
    try {
      const response = await fetch(`https://kanjiapi.dev/v1/words/${char}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching Kanji data:", error);
      throw error;
    }
  };