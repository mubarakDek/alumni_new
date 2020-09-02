import React, { useContext, useState } from "react";
import { navigate } from "@reach/router";
import "../profile/profileStyle.scss";
import Hero from "../../components/hero/Hero";
import Input from "../../components/input/Input";
import Select from "../../components/select/Select";

import axios from "axios";
// api url
import { apiURL } from "../../globals";
//context

import { UserContext } from "../../context/userContext";

function Profile() {
  const [bio, setBio] = useState({});
  const [message, setMessage] = useState("");
  // const [memberDetails, setMemberDetails] = useState({});
  const { state } = useContext(UserContext);

  // get member details

  React.useEffect(() => {
    let memberId = JSON.parse(sessionStorage.getItem("userData"))?.id || null;
    async function getData() {
      let response = await axios.get(`${apiURL}/items/memberdetail`);
      let details = response?.data?.data;
      for (let detail of details) {
        if (detail.memberid === memberId) {
          setBio({ ...detail });
        }
      }
    }

    getData();
  }, []);

  // authenticate user

  if (!state.isLoggedIn && !sessionStorage.getItem("userData")) {
    navigate("/login");
    return null;
  }

  const userData = state.isLoggedIn
    ? state
    : JSON.parse(sessionStorage.getItem("userData"));

  let title = `${userData?.firstname || "User Profile"} ${
    userData?.lastname || ""
  }`;

  async function handleBioSubmit(e) {
    e.preventDefault();

    let bioExists = false;
    let detailsId = null;

    // fetch all member details
    let response = await axios.get(`${apiURL}/items/memberdetail`);
    let details = response?.data?.data;

    for (let detail of details) {
      if (detail.memberid === userData.id) {
        bioExists = true;
        detailsId = detail.id;
        break;
      }
    }

    // data to store

    let data = {
      ...bio,
      memberid: userData.id,
      photo: null,
    };

    // if details already exist update it.a1
    if (bioExists) {
      axios
        .patch(`${apiURL}/items/memberdetail/${detailsId}`, data)
        .then(function (res) {
          if (res.status === 200) {
            setMessage("Successfully updated Bio Data.");
          }
        })
        .catch((err) => {
          console.log(err);
          setMessage("Please Fill all fields with correct Data to update.");
        });

      return;
    }

    axios
      .post(`${apiURL}/items/memberdetail`, {
        ...bio,
        memberid: userData.id,
        photo: null,
      })
      .then(function (res) {
        if (res.status === 200) {
          setMessage("Successfully Created Bio Data.");
        }
      })
      .catch((err) => {
        console.log(err);
        setMessage("Please Fill all fields with correct Data. ");
      });
  }

  function handleInputChange(e) {
    let { name, value } = e.target;

    setBio((prev) => {
      return { ...prev, [name]: value };
    });
  }

  return (
    <section className="profile">
      <Hero title={title} />
      <h2>{message}</h2>
      <div className="profile_content mx-auto p-5">
        <div className="profile_content_left p-3 ">
          <figure className="mx-auto">
            <img src="../../images/building.jpg" alt="" />
          </figure>
          <div className="short_bio">
            <form onSubmit={handleBioSubmit}>
              <label htmlFor="bio">Short BIO</label>
              <textarea
                name="bio"
                id="bio"
                value={bio.bio || ""}
                onChange={handleInputChange}
                rows="5"
                placeholder="Descripe who you are"
              />
              <Input
                label="Nickname"
                id="nickname"
                name="nickname"
                value={bio.nickname || ""}
                type="text"
                onChange={handleInputChange}
                placeholder="your nickname"
              />
              <Input
                label="City"
                id="city"
                value={bio.city || ""}
                name="city"
                type="text"
                onChange={handleInputChange}
                placeholder="your city"
              />
              <button className="btn-primary ml-auto mt-4 px-5" type="submit">
                update
              </button>
            </form>
          </div>
        </div>
        <div className="profile_content_right">
          <form className="form ">
            {/* === PERSONAL DETAILS === */}
            <div className="form_personal_details  p-5 ">
              <div className="form_group">
                <Input
                  label="First Name"
                  type="text"
                  placeholder="First Name"
                />
                <Input label="Last Name" type="text" placeholder="Last Name" />
              </div>
              <div className="form_group">
                <Input label="Nick Name" type="text" placeholder="Nick Name" />
                <Input
                  label="Email Address"
                  type="text"
                  placeholder="Email Address"
                />
              </div>
              <div className="form_group">
                <Input label="Location" type="text" placeholder="Location" />
                <Input label="Mobile" type="text" placeholder="Mobile" />
              </div>
            </div>

            {/* === EDUCATION === */}
            <div className="form_education  p-5  mt-4">
              <div className="form_group">
                <Input
                  label="Department"
                  type="text"
                  placeholder="Department"
                />
                <div className="small_div">
                  <Select label="Degree">
                    <option value="">Bachelor Degree</option>
                    <option value="">Masters Degree</option>
                  </Select>
                  <Select label="Graduation Year">
                    <option value="">2020</option>
                    <option value="">2019</option>
                    <option value="">2018</option>
                  </Select>
                </div>
              </div>
            </div>

            {/* === EXPERIENCE === */}
            <div className="form_experience  p-5 mt-4">
              <div className="form_group">
                <Input label="Employer" type="text" placeholder="Employer" />
                <div className="small_div">
                  <Input label="From" type="text" placeholder="2019" />
                  <Input label="To" type="text" placeholder="2020" />
                </div>
              </div>
              <div className="form_group">
                <Input label="Title" type="text" placeholder="Title" />
                <Input
                  label="Job Domain"
                  type="text"
                  placeholder="Job Domain"
                />
              </div>
            </div>
            <div className="btn">
              <button className="btn-primary ml-auto mt-4 px-5" type="submit">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Profile;
