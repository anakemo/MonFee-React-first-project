import React from 'react'
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export const Gallery = () => {


    const itemData = [
        {
          img: 'https://www.civitatis.com/blog/wp-content/uploads/2021/11/cafe-granos.jpg',
          title: 'Bed',
        },
        {
          img: 'https://thumbs.dreamstime.com/b/moon-coffee-cup-full-35997954.jpg',
          title: 'Books',
        },
        {
          img: 'https://cdn.shopify.com/s/files/1/0611/1205/8023/articles/blog11.jpg?v=1667049898&width=720',
          title: 'Sink',
        },
        {
          img: 'https://www.incimages.com/uploaded_files/image/1920x1080/getty_938993594_401542.jpg',
          title: 'Kitchen',
        },
        
        {
            img: 'https://www.acouplecooks.com/wp-content/uploads/2019/03/Coffee-Chemex-007.jpg',
            title: 'Kitchen',
          },
          {
            img: 'https://images.immediate.co.uk/production/volatile/sites/30/2017/07/GettyImages-1204189958-fb4b98b.jpg',
            title: 'Blinds',
          },
        
        {
          img: 'https://coffeehunter.com/wp-content/uploads/2022/10/Ethiopia-square-2-1024x863.jpg',
          title: 'Doors',
        },
        {
          img: 'https://elevencoffees.com/wp-content/uploads/2019/10/coffee-bean-world-950-1.jpg?ezimgfmt=ng%3Awebp%2Fngcb1%2Frs%3Adevice%2Frscb1-2',
          title: 'Coffee',
        },
        {
          img: 'https://helenacoffee.vn/wp-content/uploads/2022/03/Instant-Coffee-Production-Process-1.jpg',
          title: 'Storage',
        },
        {
          img: 'https://thumbs.dreamstime.com/b/pouring-coffee-splash-white-cup-jumping-saucer-some-beans-besides-floor-isolated-background-clipping-path-included-136509658.jpg',
          title: 'Candle',
        },
       
      ];











 
    return (
        <Box sx={{ width:1200, height: 750, overflowY: 'scroll' }}>
          <ImageList variant="masonry" cols={4} gap={10}>
            {itemData.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  src={`${item.img}?w=248&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      );
    }
  



