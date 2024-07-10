import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {
  const { data, loading, error } = useFetch(
    "/hotels/countByCity?cities=ISTANBUL,Antalya,Trabzon"
  );

  return (
    <div className="featured">
      {loading ? (
        "Loading please wait"
      ) : (
        <>
          <div className="featuredItem">
            <img
              src="https://a.cdn-hotels.com/gdcs/production26/d1561/dff6a952-90fc-4d9f-b191-549cf15d8039.jpg?impolicy=fcrop&w=1600&h=1066&q=medium"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>ISTANBUL</h1>
              <h2>{data[0]} properties</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcRNPXyhR2cpsHoasNmvK7AO7h38NwRF3NviPqieqoy3JzACqyc3adpImekc0TcUOE6a"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Antalya</h1>
              <h2>{data[1]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcQZeixvRR4lF9Xq1GybOJd41Lqlzk_Ex8InN0-UiW09FOFItJncCJdwuMQfvBKoICw-"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Trabzon</h1>
              <h2>{data[2]} properties</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
