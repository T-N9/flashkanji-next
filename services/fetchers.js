export const fetchAll = async () => {
  try {
    const response = await fetch("https://flashkanji.000webhostapp.com/api/");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching Kanji data:", error);
    throw error;
  }
};

export const shuffleAll = async () => {
  try {
    const response = await fetch(
      "https://flashkanji.000webhostapp.com/api/?rand=0"
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching Kanji data:", error);
    throw error;
  }
};

export const fetchByChapter = async (chapter, level) => {
  try {
    const response = await fetch(
      `https://flashkanji.000webhostapp.com/api/?level=${level}&chapter=${chapter}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching Kanji data:", error);
    throw error;
  }
};

export const fetchByLevel = async (level) => {
  try {
    const response = await fetch(
      `https://flashkanji.000webhostapp.com/api/?level=${level}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching Kanji data:", error);
    throw error;
  }
};

export const randomData = async (count) => {
  try {
    const response = await fetch(
      `https://flashkanji.000webhostapp.com/api/?rand=${count}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching Kanji data:", error);
    throw error;
  }
};

export const fetchByMultiChapters = async (chapters, level) => {
  try {
    const response = await fetch(
      `https://flashkanji.000webhostapp.com/api/?chapters=${chapters}&level=${level}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching Kanji data:", error);
    throw error;
  }
};

export const fetchBySearchValue = async (value) => {
  try {
    const response = await fetch(
      `https://flashkanji.000webhostapp.com/api/?search=${value}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching Kanji data:", error);
    throw error;
  }
};

/* ---------------------------------------------

Quiz Fetchers

---------------------------------------------*/

/* Quiz for Character to Onyomi by Chapter and level */
export const fetchQuiz_charOn_chapter_level = async (chapter, level, mode=1) => {
  try {
    const response = await fetch(
      `https://flashkanji.000webhostapp.com/api/quiz.php?chapter=${chapter}&level=${level}&mode=${mode}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching Kanji data:", error);
    throw error;
  }
};

/* Quiz for Character to Onyomi by level */
export const fetchQuiz_charOn_level = async ( level, mode=1) => {
  try {
    const response = await fetch(
      `https://flashkanji.000webhostapp.com/api/quiz.php?level=${level}&mode=${mode}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching Kanji data:", error);
    throw error;
  }
};

/* Quiz for Character to Onyomi by random */
export const fetchQuiz_charOn_rand = async (count, mode=1) => {
  try {
    const response = await fetch(
      `https://flashkanji.000webhostapp.com/api/quiz.php?rand=${count}&mode=${mode}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching Kanji data:", error);
    throw error;
  }
};
