import React, { useEffect, useState } from 'react';
import {Input, Typography, Image, List} from 'antd'
import {Divider, Skeleton } from 'antd';
import InfiniteScroll from 'react-infinite-scroll-component';

const Gallery = () => {
  const [data, setData] = useState([]);
  const [dataSearch, setDataSearch] = useState("");
  const dataUrl = `https://dummyjson.com/products/search?q=${dataSearch}`;
  const [loading, setLoading] = useState(false);
  const [previewImages, setPreviewImages] = useState(false);
  const [visible, setVisible] = useState(true);
  const handlePreviewClose = () => {
    setVisible(false);
  };
  const loadMoreData = () => {
    if (loading) {
      return;
    }
    setLoading(true);
    fetch(dataUrl)
      .then((res) => res.json())
      .then((body) => {
        setData([...body.products]);
        console.log(data)
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
      loadMoreData()
  }, [dataSearch]);


  return (
  <div style={{ marginTop: '60px' }}>
    <Typography.Title style={{ textAlign: 'center' }}>Mansour's Gallery</Typography.Title>
    <Input.Search
      style={{ width: '40%', margin: 'auto' }}
      onSearch={(value) => setDataSearch(value)}
    />
    {dataSearch ? (<h6 style={{textAlign: 'left', paddingLeft: '15px'}}> Showing Result for: <span style={{fontWeight: 'bold'}}>{dataSearch}</span></h6>) : null}
    {data && data.length > 0 ? (
      <div
      id="scrollableDiv"
      style={{
        height: 400,
        overflow: 'auto',
        padding: '0 16px',
        border: '1px solid rgba(140, 140, 140, 0.35)',
      }}
    >
      <InfiniteScroll
        dataLength={data.length}
        next={loadMoreData}
        hasMore={data.length < 50}
        loader={<Skeleton avatar paragraph={{ rows: 1 }} active  loading={loading}/>}
        endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
        scrollableTarget="scrollableDiv"
      >
        <List
          dataSource={data}
          renderItem={(item) => (
            <List.Item key={item.id}>
              <List.Item.Meta
                avatar={<Image preview={{visible: false}} src={item.thumbnail} onClick={()=> 
                setPreviewImages(item.images)}/>}
                title={<a>{item.title}</a>}
                description={item.description}
              />
            </List.Item>
          )}
        />
      </InfiniteScroll>
      {
        previewImages.length > 0 ? (
          <Image.PreviewGroup  preview={{
            visible: visible,
            onVisibleChange: (newVisible) => setVisible(newVisible),
            onClose: handlePreviewClose,
          }}>
            {
              previewImages.map((image)=>{
                return <Image src={image} />
              })
            }
          </Image.PreviewGroup>
        ) : null
      }
    </div>





    ) : (
      <p>No data available</p>
    )}
  </div>
);
};

export default Gallery;