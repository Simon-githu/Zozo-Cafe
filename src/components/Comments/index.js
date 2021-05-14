import React from 'react'
import Carousel from 'react-elastic-carousel';
import { 
    CommentsParagraph,
    CommentsBox,
    MaxWidth,
    CommentsCard,
    CommentsImg,
    CommentsText,
    CommentsContainer,
    CommentsHeading
 } from './CommentsElements';
 const Comments = ({ heading, data }) => {
    const breakPoints=[
        {width:500,itemsToShow:1},
        {width:768,itemsToShow:3},
      
    ];
    return (
        
    <CommentsContainer id="zozo-cafe-comments">
    <MaxWidth class="max-width">
    <CommentsHeading>{heading}</CommentsHeading>
        <Carousel  showArrows="true" breakPoints={breakPoints}>
        {data.map((comment, index) => (
            <CommentsCard key={index}>
                <CommentsBox >
                 <CommentsImg src={comment.img} alt=""/> 
                    <CommentsText class="text">{comment.name}</CommentsText>
                    <CommentsParagraph>{comment.desc}</CommentsParagraph>
                   
                </CommentsBox>
            </CommentsCard>
           
        ))}
        </Carousel>
    </MaxWidth>
</CommentsContainer>


    )
}

export default Comments