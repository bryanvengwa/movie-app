import React from 'react'
import { MdSignalWifiOff } from 'react-icons/md';


export default function NoInternet() {
  return (
		<> 
                    <div className="no-internet">

			<MdSignalWifiOff size={64} />
			<p>No Internet Connection ❗️</p>
                    </div>
		</>
  );
}
