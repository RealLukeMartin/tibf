import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from "react";
import { getRecords, reset } from '../features/records/recordsSlice'
import RecordItem from "./RecordItem";
import LoadingIcons from 'react-loading-icons'

export default function Records() {
  const dispatch = useDispatch();
  const { records, isLoading, isError, message } = useSelector(
    (state) => state.records
  );

  useEffect(() => {
    if (isError) {
      console.log(message)
    }
    
    dispatch(getRecords());

    if(!isError) {

      dispatch(reset())

    }

  }, [isError, message, dispatch]);

  if (isLoading) {
    return (<><h5>Loading...</h5></>);
  }

  console.log('these are the records', records);

  return(   
    <section className="container">
      <h1>Records</h1>
        {records.length > 0 ? (
          <table class="content-table">
            <thead>
              <tr>
                <th>Year</th>
                <th>Wins</th>
                <th>Losses</th>
                <th>Conference</th>
              </tr>
            </thead>
            <tbody>
               {records.map((record) => (
                 <RecordItem key={record.year} record={record} />
                ))
              }
            
            </tbody>

          </table>
            ) : (
            <LoadingIcons.Bars />
          // <h3 className="loading">No records found.</h3>
        )}
    </section>
  )
}