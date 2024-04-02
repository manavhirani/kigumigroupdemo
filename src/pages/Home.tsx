import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function Home() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col items-center min-h-screen gap-20">
      <div className="flex flex-col items-center w-full gap-5 p-5 bg-gray-100">
        <h1 className="text-center text-8xl font">{t("Kigumi Group Trainings")}</h1>
        <p className="text-center"> {t("Brief description about trainings")}</p>
      </div>
      <button className="flex flex-row items-center gap-4 px-20 py-5 text-white bg-green-600 rounded-full">
        <p className="text-2xl text-center">{t("Take Our Diagnostic Test")}</p>
        <svg width="26" height="16" viewBox="0 0 26 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M0.34375 9C0.34375 8.62704 0.491908 8.26936 0.755631 8.00563C1.01935 7.74191 1.37704 7.59375 1.75 7.59375H20.8562L15.7563 2.49375C15.5079 2.22717 15.3726 1.87459 15.379 1.51027C15.3855 1.14596 15.5331 0.798361 15.7907 0.540711C16.0484 0.283062 16.396 0.135477 16.7603 0.129049C17.1246 0.122621 17.4772 0.257852 17.7437 0.506252L25.2437 8.00625C25.5071 8.26992 25.655 8.62734 25.655 9C25.655 9.37266 25.5071 9.73008 25.2437 9.99375L17.7437 17.4938C17.615 17.6319 17.4598 17.7427 17.2873 17.8196C17.1148 17.8965 16.9285 17.9378 16.7397 17.9411C16.5509 17.9444 16.3634 17.9097 16.1883 17.839C16.0132 17.7683 15.8541 17.663 15.7206 17.5294C15.587 17.3959 15.4817 17.2369 15.411 17.0617C15.3403 16.8866 15.3056 16.6991 15.3089 16.5103C15.3122 16.3215 15.3536 16.1352 15.4304 15.9627C15.5073 15.7902 15.6181 15.635 15.7563 15.5063L20.8562 10.4063H1.75C1.37704 10.4063 1.01935 10.2581 0.755631 9.99437C0.491908 9.73065 0.34375 9.37296 0.34375 9Z" fill="white" />
        </svg>
      </button>
      <Link to="/trainings">
        <div className="flex flex-col items-center w-full overflow-hidden border-2 border-green-400 rounded-2xl">
          <div className="bg-gray-200 h-52 w-96">
          </div>
          {/* <img className="" src="" alt={t("Browse our trainings image")} /> */}
          <div className="flex items-center justify-center w-full gap-1 px-4 py-4 border-t-2 felx-row border-inherit">
            <p className="text-center"> {t("Browse our trainings")}</p>
            <svg width="26" height="12" viewBox="0 0 26 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M0.34375 9C0.34375 8.62704 0.491908 8.26936 0.755631 8.00563C1.01935 7.74191 1.37704 7.59375 1.75 7.59375H20.8562L15.7563 2.49375C15.5079 2.22717 15.3726 1.87459 15.379 1.51027C15.3855 1.14596 15.5331 0.798361 15.7907 0.540711C16.0484 0.283062 16.396 0.135477 16.7603 0.129049C17.1246 0.122621 17.4772 0.257852 17.7437 0.506252L25.2437 8.00625C25.5071 8.26992 25.655 8.62734 25.655 9C25.655 9.37266 25.5071 9.73008 25.2437 9.99375L17.7437 17.4938C17.615 17.6319 17.4598 17.7427 17.2873 17.8196C17.1148 17.8965 16.9285 17.9378 16.7397 17.9411C16.5509 17.9444 16.3634 17.9097 16.1883 17.839C16.0132 17.7683 15.8541 17.663 15.7206 17.5294C15.587 17.3959 15.4817 17.2369 15.411 17.0617C15.3403 16.8866 15.3056 16.6991 15.3089 16.5103C15.3122 16.3215 15.3536 16.1352 15.4304 15.9627C15.5073 15.7902 15.6181 15.635 15.7563 15.5063L20.8562 10.4063H1.75C1.37704 10.4063 1.01935 10.2581 0.755631 9.99437C0.491908 9.73065 0.34375 9.37296 0.34375 9Z" fill="black" />
            </svg>
          </div>
        </div>
      </Link>
      <button className="flex flex-row items-center gap-2 px-4 py-2 border-b-2 border-black">
        <p className="text-xl text-center">{t("Try out a Free Training")}</p>
        <svg width="26" height="14" viewBox="0 0 26 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M0.34375 9C0.34375 8.62704 0.491908 8.26936 0.755631 8.00563C1.01935 7.74191 1.37704 7.59375 1.75 7.59375H20.8562L15.7563 2.49375C15.5079 2.22717 15.3726 1.87459 15.379 1.51027C15.3855 1.14596 15.5331 0.798361 15.7907 0.540711C16.0484 0.283062 16.396 0.135477 16.7603 0.129049C17.1246 0.122621 17.4772 0.257852 17.7437 0.506252L25.2437 8.00625C25.5071 8.26992 25.655 8.62734 25.655 9C25.655 9.37266 25.5071 9.73008 25.2437 9.99375L17.7437 17.4938C17.615 17.6319 17.4598 17.7427 17.2873 17.8196C17.1148 17.8965 16.9285 17.9378 16.7397 17.9411C16.5509 17.9444 16.3634 17.9097 16.1883 17.839C16.0132 17.7683 15.8541 17.663 15.7206 17.5294C15.587 17.3959 15.4817 17.2369 15.411 17.0617C15.3403 16.8866 15.3056 16.6991 15.3089 16.5103C15.3122 16.3215 15.3536 16.1352 15.4304 15.9627C15.5073 15.7902 15.6181 15.635 15.7563 15.5063L20.8562 10.4063H1.75C1.37704 10.4063 1.01935 10.2581 0.755631 9.99437C0.491908 9.73065 0.34375 9.37296 0.34375 9Z" fill="black" />
        </svg>
      </button>
    </div >
  )
}

export default Home;