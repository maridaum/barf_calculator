import { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [dogData, setDogData] = useState({
    weight: "",
    lifeStage: "",
    activityLevel: "",
  });

  const [feedingData, setFeedingData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDogData((prevDogData) => {
      return {
        ...prevDogData,
        [name]: value,
      };
    });
  };

  console.log(dogData);

  const handleSubmit = (e) => {
    e.preventDefault();
    const dogWeightOz = dogData.weight * 16;
    let feedingPercentage;
    if (dogData.activityLevel === "inactive") {
      feedingPercentage = 0.02;
    } else if (dogData.activityLevel === "average") {
      feedingPercentage = 0.025;
    } else if (dogData.activityLevel === "active") {
      feedingPercentage = 0.03;
    } else if (dogData.activityLevel === "athletic") {
      feedingPercentage = 0.035;
    } else if (dogData.activityLevel === "2to4") {
      feedingPercentage = 0.1;
    } else if (dogData.activityLevel === "4to6") {
      feedingPercentage = 0.08;
    } else if (dogData.activityLevel === "6to8") {
      feedingPercentage = 0.06;
    } else if (
      dogData.activityLevel === "8to12" ||
      dogData.activityLevel === "12to24"
    ) {
      feedingPercentage = 0.04;
    } else {
      alert("A valid activity level was not selected.");
    }

    const maintenance = dogWeightOz * feedingPercentage;

    setFeedingData({
      dailyIntake: maintenance,
      musclarTissue: maintenance * 0.5,
      musclarOrgan: maintenance * 0.2,
      edibleBone: maintenance * 0.1,
      liver: maintenance * 0.05,
      otherOrgan: maintenance * 0.05,
      vegetables: maintenance * 0.07,
      seeds: maintenance * 0.02,
      fruits: maintenance * 0.01,
    });
  };

  console.log(feedingData);

  return (
    <div className="calculator">
      <h1 className="calc--title">BARF Diet Calculator</h1>
      <form className="calc--form">
        <label className="calc--label" htmlFor="weight">
          Dog's Weight
        </label>
        <p className="note">
          * Enter your dog's IDEAL weight if trying to lose/gain weight
        </p>
        <input
          className="calc--input"
          type="number"
          id="weight"
          placeholder="lbs"
          min={1}
          name="weight"
          value={dogData.weight}
          onChange={handleChange}
          required
        ></input>
        <label className="calc--label" htmlFor="lifeStage">
          Life Stage
        </label>
        <select
          className="calc--select"
          id="lifeStage"
          name="lifeStage"
          value={dogData.lifeStage}
          onChange={handleChange}
          required
        >
          <option value="" disabled>
            Select Life Stage
          </option>
          <option value="adult">Adult</option>
          <option value="puppy">
            Puppy(2-12 Months for Small Breeds & 12-24 Months for Large Breeds)
          </option>
        </select>
        {dogData.lifeStage === "" && ""}
        {dogData.lifeStage === "adult" && (
          <>
            <label className="calc--label" htmlFor="activityLevel">
              Activity Level
            </label>
            <select
              className="calc--select"
              id="activityLevel"
              name="activityLevel"
              value={dogData.activityLevel}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Select Activity Level
              </option>
              <option value="inactive">Inactive</option>
              <option value="average">Average</option>
              <option value="active">Active</option>
              <option value="athletic">Atheltic/Working</option>
            </select>
          </>
        )}

        {dogData.age === "puppy" && (
          <>
            <label className="calc--label" htmlFor="activityLevel">
              Puppy Age
            </label>
            <select
              className="calc--select"
              id="activityLevel"
              name="activityLevel"
              value={dogData.activityLevel}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Select Age
              </option>
              <option value="2to4">2-4 Months</option>
              <option value="4to6">4-6 Months</option>
              <option value="6to8">6-8 Months</option>
              <option value="8to10">8-10 Months</option>
              <option value="10to12">10-12 Months</option>
              <option value="largeBreeds" disabled>
                [Large Breeds]
              </option>
              <option value="12to14">12-14 Months</option>
            </select>
          </>
        )}

        <br />

        <button onClick={handleSubmit}>Calculate Daily Food Intake</button>
      </form>
    </div>
  );
};

export default Calculator;
