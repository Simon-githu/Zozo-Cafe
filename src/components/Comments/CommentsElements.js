import styled from 'styled-components'
export const CommentsContainer =styled.div`
  padding: 100px 0;
  font-family: 'Poppins', sans-serif;
  background: #111;
  color: #fff;
  .rec.rec-arrow{
    visibility: hidden;
}
.rec.rec-dot {
visibility: hidden;
}
`;
export const MaxWidth =styled.div`
 max-width: 1300px;
    padding: 0 80px;
    margin: auto;
    @media (max-width: 991px) {
    
    padding: 0 50px;
}
@media (max-width:947px){
    max-width: 930px;
}
@media (max-width: 690px) {
    
    padding: 0 23px;
}
`;

export const CommentsImg =styled.img`
  height: 150px;
    width: 150px;
    object-fit: cover;
    border-radius: 50%;
    border: 5px solid #ffc500;
    transition: all 0.3s ease;
`;
export const CommentsCard = styled.div`
 background: #222;
    border-radius: 6px;
    padding: 25px 35px;
    text-align: center;
    overflow: hidden;
    width:95%;
    transition: all 0.3s ease;
    &:hover{
        background: #ffc500;
    }
    &:hover ${CommentsImg}{
        border-color: #e31837;
    }
`;
export const CommentsBox =styled.div`
 display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    &:hover{
        transform: scale(1.05);
    }
`;

export const CommentsText = styled.div`
 font-size: 25px;
    font-weight: 500;
    margin: 10px 0 7px 0;
`;
export const CommentsParagraph =styled.p`
`;
export const CommentsHeading = styled.h1`
  font-size: clamp(2rem, 2.5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem`;
