
import feed from './mocks/category_feed';
import categories from './mocks/categories';
import fs from 'fs';




const randomInRange = (max:number) => {  
    return Math.floor(Math.random() * max ); 
} 
console.log(feed.payload.posts.length);

feed.payload.posts = [...feed.payload.posts.slice(1,81),
                    ]
feed.payload.totalCount = feed.payload.posts.length;
const newFeed = feed.payload.posts.map(post => {
    post['categories'] = categories;
    return post
})
console.log(feed.payload.posts.length);
console.log(feed.payload.totalCount);


feed.payload.posts = newFeed;
fs.writeFile('newFeed.json',JSON.stringify(feed,null,4),(err)=>{
    console.log(err);
    
})

export default randomInRange