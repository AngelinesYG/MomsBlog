import * as React from 'react'
import Layout from '../components/layout'
// import { graphql } from 'gatsby'
import {documentToReactComponents} from '@contentful/rich-text-react-renderer'




// const Blog = (props) =>{
//     return (
//         <Layout>
//             <h2>{props.data.contentfulBlogPost.title}</h2>
//             <h4>{props.data.contentfulBlogPost.author}</h4>
//             <p>{props.data.contentfulBlogPost.publishedDate}</p>
//             {documentToReactComponents(props.data.contentfulBlogPost.body.json)}
//         </Layout>
const Blog = () =>{
    return (
        <Layout>
            <h1>Boy Mom</h1>
            <h3>By: Super Mom</h3>
            <h5>Date: May 19, 2021</h5>
            <p>Having all boys, while it’s an incredible blessing, it’s also A LOT of work. These kids just won’t’ sit the heck down!! I can’t keep up with them. You turn your back for one second and it’s like a damn tornado struck the place. Yes, they are super sweet and always wanting to hug you. Words can’t express the love… But I’m tired of having to strip naked from the waist down just so I could pee due to the fear of getting up from the toilet and having the bottom of my pants soaked in piss. And that’s not the worse part, I can’t even count how many times I almost busted my ass trying to sit down on the toilet only to notice, at the very last minute, that the seat is bathed in the sticky, stinky, disgusting, yellow liquid. Ugh! And no. It doesn’t really get better. The older the messier! I can’t tell you how many times I found nasty, moldy, old, dried-up food on some random place in a plate I had been looking for for days. Sigh… But you know what even more insane?! Incomprehensible even. The fear of some hoochie, chicken head coming to take my babies away. Because no matter how much they annoy me and piss me off, they’re my babies. I wouldn’t change them for the world; and no women will ever be good enough for them. If they could only just learn to freaking piss INSIDE the damn toilet!</p>
            <br/>

            <h1>So Spent</h1>
            <h3>By: Sexy Mamma</h3>
            <h5>Date: May 20, 2021</h5>
            <p>Today work was so hectic and the fiscal year is coming to an end. We still do not have our budget set, which has me stressed out. So while I was trying to catch up with work before my next meeting. My son calls me, telling me that his computer is not longer working and he won’t be able to participate in school. It’s so difficult being a single parent that has a demanding full-time job and is going to school. Like sometimes I wish I had a double so I can tap out from time to time. My head is full of thoughts and tasks that I need to complete, so much going on that it’s sometimes hard to unwind. From the spreadsheet in my head, to clinic events, so my 9 year-old's needs. I’m just so spent...</p> 
            <br/>

            <h1>Amazing Moms</h1>
            <h3>By: Super Mom</h3>
            <h5>Date: May 18, 2021</h5>
            <p>Everyone knows parenting is hard. Kids should really come with an instruction manual or something. Or at least a warning. Don't get me wrong. I love my kids and everything I do is for them. But when you have to juggle between being a mom, a housewife, a student, and managing everything else, there's really no room for anything else. Not even 'me' time. This remote learning environment has made it especially hard on all of us, but I'd have to say working moms the most. On top of everything else we were doing before, now we have to be teachers too. I mean, I'd chose the safety of my child over a virus infected school any day, but that doesn't mean it isn't hard to handle all of the demands we are still expected to handle as if the kids were still in school. Most employers still hold women to the same or higher standards without understanding the extreme hardships of the current circumstances. Seriously ladies, how do you attend your meetings or are able to focus in class when your kids is sitting right next to you pulling at your shirt and calling you mommy for the thousand time? How do you get any work done? I find it now takes me triple the time to complete any tasks. Doing homework while you have a baby trying to climb on top of you, your four-year-old asking for an extra snack or anything else he can think of, and your six-year-old running a tornado next to you while your teenager is screaming at him to stop. It's impossible! How us moms get any work done is beyond me. I don't even know how I do it half the time. I guess it's like my teenager says; we moms have super powers and aren't human. To all you working/student moms out there. Power to you! We got this!</p>
            <br/>

        </Layout>
    )
}

export default Blog