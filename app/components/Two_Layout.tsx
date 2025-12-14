'use client';

type layoutprops ={
  leftheading: string;
  leftsubheading?: string;
  leftdescription: string;

  blockquote_border_style?: string;

  blockquote?: string;
  blockquote_bodytext?: string;
  blockquote_heading?: string;
  blockquote_subheading?: string;

   show_video_right_side?: boolean;
  right_videosrc?: string;
  right_imagesrc?: string;

 

 

}

export default function TwoLayout({leftheading, leftsubheading, leftdescription,blockquote,blockquote_border_style, blockquote_bodytext, blockquote_heading, blockquote_subheading,show_video_right_side,right_imagesrc, right_videosrc }: layoutprops) {
  return (
    <>
      <section className=" py-5 bg-light container">
        <div className="row">

          {/* LEFT TEXT CONTENT */}
          <div className="col-md-5 order-md-1 order-2 container d-flex align-items-center">
          <div>
              <h4 className="py-3">{leftheading}</h4>
              < h3 className="pb-3">{leftsubheading}</h3>

            <p className="text-justify">
              {leftdescription}
            </p>

            <div className="container" style={blockquote_bodytext ? { borderLeft: blockquote_border_style || '2px solid black' } : {}}>
              <blockquote> 
                <span className="display-4">{blockquote}</span>
                <h6>
                    <i>
                     {blockquote_bodytext}
                    </i>
                   
                    <b className="d-block text-right py-2">{blockquote_heading}</b>
                    <p className="text-right">{blockquote_subheading}</p>
                </h6>
              
              </blockquote>
            </div>
          </div>
          </div>

          {/* IFRAME — visible only on lg and up */}
        
            <div
            className={`col-md-6 order-md-1 order-1 ${
              show_video_right_side ? '' : 'd-none d-lg-block'
            }`}
          >
            <div className="container ">
    {right_imagesrc ? (
      <img
        src={right_imagesrc}
        alt="chairman sir img"
        style={{ width: '80%', height: '100%', objectFit: 'cover' }}
        className="mx-auto"
      />
    ) : (
      <div className="ratio ratio-16x9">
<iframe
        src={right_videosrc}
        title="video"
        allowFullScreen
          loading="lazy" 
      ></iframe>
      </div>
      
    )}
  </div>
</div>

        </div>
      </section>
    </>
  );
}