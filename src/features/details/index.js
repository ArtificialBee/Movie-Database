import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import _axios from "../../config/api/apiKeyInstance";
import { useImageURL } from "../../context/imageURLContext";
import MoreInfo from "./moreInfo";
import { BiCalendar, BiTime } from "react-icons/bi";
const DeatilWrapper = styled.div`
  height: 100%;
  width: 100%;
`;

const Cover = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${({ imagePath }) => imagePath});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const NoCoverImage = styled.h1`
  color: white;
  font-size: 2rem;
  font-weight: 100;
  text-align: center;
  margin-top: -200px;
`;

const HoverDiv = styled.div`
  width: 100%;
  height: 325px;
  background: linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 100%);
  padding: 37px 29px 0 52px;
`;

const TitleAndOverviewWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h3`
  color: white;
  font-size: 2.5rem;
  font-weight: 400;
  grid-column: 1/-1;
`;

const Overview = styled.p`
  color: white;
  font-style: italic;
  font-weight: 100;
  font-size: 1rem;
  max-width: 500px;
`;

const Genres = styled.div`
  p {
    color: rgba(255, 255, 255, 0.5);
    font-style: italic;
  }
`;

const Genre = styled.p`
  color: white;
  display: inline-block;
`;

const DetailsSection = styled.div`
  height: 174px;
  background: rgba(11, 29, 46, 0.7);
  padding-left: 45px;
  padding-top: 26px;
  padding-right: 50px;
  display: flex;
  justify-content: space-between;
  backdrop-filter: blur(5px);
`;

const DateTimeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 13px;
`;

function Details({ onOpen }) {
  const { content, id } = useParams();
  const [data, setData] = useState(null); //state for fetched data
  const imageURL = useImageURL();

  const getDetails = async () => {
    const response = await _axios(`${content}/${id}`);
    return response;
  };

  useEffect(() => {
    getDetails()
      .then((res) => {
        setData(res.data);
        if (res.data.backdrop_path) {
        }
      })
      .catch((err) => {
        console.log("Error : ", err);
      });
    //Changing navbar state
    onOpen(false);
    return () => {
      onOpen(true);
    };
  }, []);
  console.log("Ovo je data -> ", data);
  let runtime = null; //variable fir dinamically render runtime or episode_run_time
  if (data) {
    if (data.runtime) {
      runtime = data.runtime + " min";
    }
    if (data.episode_run_time) {
      runtime = data.episode_run_time + " /ep";
    }
  }
  return (
    <DeatilWrapper>
      <Cover imagePath={data ? imageURL + data.backdrop_path : null}>
        <HoverDiv>
          <TitleAndOverviewWrapper>
            <Title>{data ? data.title || data.name : "Loading name..."}</Title>
            <Overview>{data ? data.tagline : "Loading tagline..."}</Overview>
          </TitleAndOverviewWrapper>
          <Genres>
            {data
              ? data.genres.map((genre) => {
                  return <p key={genre.id}>{genre.name}</p>;
                })
              : null}
          </Genres>
        </HoverDiv>
        {data ? (
          !data.backdrop_path ? (
            <NoCoverImage>This contetn has no cover image!</NoCoverImage>
          ) : null
        ) : null}
        <DetailsSection>
          <DateTimeWrapper>
            <MoreInfo icon={<BiCalendar size={25} />}>
              {data
                ? data.release_date || data.first_air_date
                : "Loading date..."}
            </MoreInfo>
            <MoreInfo icon={<BiTime size={25} />}>{runtime}</MoreInfo>
          </DateTimeWrapper>
          <Overview>{data ? data.overview : "Loading overview..."}</Overview>
        </DetailsSection>
      </Cover>
    </DeatilWrapper>
  );
}

export default Details;
