export const fetchAll = async () => {
  try {
    const response = await fetch("https://flash-kanji-node.onrender.com/kanji");
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
      "https://flash-kanji-node.onrender.com/kanji?rand=0"
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching Kanji data:", error);
    throw error;
  }
};

export const shuffleByLevels = async (levels) => {
  try {
    const response = await fetch(
      `https://flash-kanji-node.onrender.com/kanjishuffle.php?levels=${levels}`
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
      `https://flash-kanji-node.onrender.com/kanji?level=${level}&chapter=${chapter}`,
      {
        mode: "no-cors",
      }
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
      `https://flash-kanji-node.onrender.com/kanji?level=${level}`
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
      `https://flash-kanji-node.onrender.com/kanji?random=${count}`,
      {
        mode: "no-cors",
      }
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
      `https://flash-kanji-node.onrender.com/kanji?chapters=${chapters}&level=${level}`
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
      `https://flash-kanji-node.onrender.com/kanji?search=${value}`
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
export const fetchQuiz_charOn_chapter_level = async (
  chapter,
  level,
  mode = 1
) => {
  try {
    const response = await fetch(
      `https://flash-kanji-node.onrender.com/kanjiquiz.php?chapter=${chapter}&level=${level}&mode=${mode}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching Kanji data:", error);
    throw error;
  }
};

/* Quiz for Character to Onyomi by level */
export const fetchQuiz_charOn_level = async (level, mode = 1) => {
  try {
    const response = await fetch(
      `https://flash-kanji-node.onrender.com/kanjiquiz.php?level=${level}&mode=${mode}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching Kanji data:", error);
    throw error;
  }
};

/* Quiz for Character to Onyomi by random */
export const fetchQuiz_charOn_rand = async (count, mode = 1) => {
  try {
    const response = await fetch(
      `https://flash-kanji-node.onrender.com/kanjiquiz.php?rand=${count}&mode=${mode}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching Kanji data:", error);
    throw error;
  }
};

/* ---------------------------------------------

Jukugo Fetchers

---------------------------------------------*/
/* Jukugo for Character to Onyomi by random */
export const fetchJukugo_all = async () => {
  try {
    const response = await fetch(
      `https://flash-kanji-node.onrender.com/kanjijukugo.php`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching Kanji data:", error);
    throw error;
  }
};

/* Jukugo for Character to Onyomi by random */
export const fetchJukugo_byLevel = async (level = 5) => {
  try {
    const response = await fetch(
      `https://flash-kanji-node.onrender.com/kanjijukugo.php?level=${level}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching Kanji data:", error);
    throw error;
  }
};

export const fetchRandomJukugo_byLevel = async (count = 20, level = 3) => {
  try {
    const response = await fetch(
      `https://flash-kanji-node.onrender.com/kanjijukugo.php?level=${level}&rand=${count}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching Kanji data:", error);
    throw error;
  }
};

export const fetchJukugo_byKanjis = async (kanjis) => {
  try {
    const response = await fetch(
      `https://flash-kanji-node.onrender.com/kanjijukugo.php?kanjis=${kanjis}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching Kanji data:", error);
    throw error;
  }
};

export const fetchJukugo_byLevelChapter = async (chapter, level) => {
  try {
    const response = await fetch(
      `https://flash-kanji-node.onrender.com/kanjijukugo.php?level=${level}&chapter=${chapter}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching Kanji data:", error);
    throw error;
  }
};

/* handling User Sign Up */
export const handleUserSignUp = async (userInfo) => {
  const url = "https://flash-kanji-node.onrender.com/kanjiauth.php";
  const data = {
    user_id: userInfo?.id,
    user_name: userInfo?.name,
    user_mail: userInfo?.email,
  };

  try {
    const res = await fetch(url, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams(data).toString(),
    });

    if (res.ok) {
      // console.log({ res });

      return true;
    } else {
      console.error("Failed to fetch");
      return false;
    }
  } catch (error) {
    console.error("Error during fetch:", error);
    return false;
  }
};

// handling User Practice Interaction

export const handleUserPractice = async (actionInfo) => {
  const url = "https://flash-kanji-node.onrender.com/kanjiuser_practice.php";

  try {
    const res = await fetch(url, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams(actionInfo).toString(),
    });

    if (res.ok) {
      // console.log({ res });

      return true;
    } else {
      console.error("Failed to fetch");
      return false;
    }
  } catch (error) {
    console.error("Error during fetch:", error);
    return false;
  }
};

export const getUserPractice = async (id, type) => {
  try {
    const response = await fetch(
      `https://flash-kanji-node.onrender.com/kanjiuser_practice.php?user_id=${id}&item_type=${type}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching Kanji data:", error);
    throw error;
  }
};

export const getUserFavourite = async (id, type) => {
  try {
    const response = await fetch(
      `https://flash-kanji-node.onrender.com/kanjiuser_practice.php?user_id=${id}&item_type=${type}&for_favourite`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching Kanji data:", error);
    throw error;
  }
};

export const getUserTarget = async (id, type) => {
  try {
    const response = await fetch(
      `https://flash-kanji-node.onrender.com/kanjiuser_practice.php?user_id=${id}&item_type=${type}&for_target`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching Kanji data:", error);
    throw error;
  }
};
