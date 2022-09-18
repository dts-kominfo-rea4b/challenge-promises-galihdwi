const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

const promiseOutput = async (params) => {
  try {
    const theaterIXX = await promiseTheaterIXX();
    const theaterVGC = await promiseTheaterVGC();
    const dataTable = [...theaterIXX, ...theaterVGC]
    let countEmosi = 0;

    dataTable.forEach((data) => {
      if (data.hasil === params) {
        countEmosi++;
      }
    });

    return countEmosi;

  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  promiseOutput,
};
