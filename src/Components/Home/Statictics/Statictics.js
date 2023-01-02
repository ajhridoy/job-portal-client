import React from 'react';

const Statictics = () => {
    return (
        <section className="p-6 bg-gray-800 text-gray-100 w-3/5 mx-auto mb-10 rounded-lg" data-aos="flip-up"
		data-aos-easing="linear"
		data-aos-duration="1000">
	<div className="container mx-auto grid justify-center grid-cols-1 text-center lg:grid-cols-3">
		<div className="flex flex-col justify-start m-2 lg:m-6">
			<p className="text-4xl font-bold leading-none lg:text-6xl">5K+</p>
			<p className="text-sm sm:text-base">JOBS</p>
		</div>
		<div className="flex flex-col justify-start m-2 lg:m-6">
			<p className="text-4xl font-bold leading-none lg:text-6xl">1K+</p>
			<p className="text-sm sm:text-base">Companies</p>
		</div>
		<div className="flex flex-col justify-start m-2 lg:m-6">
			<p className="text-4xl font-bold leading-none lg:text-6xl">400+</p>
			<p className="text-sm sm:text-base">Recruiters</p>
		</div>
	</div>
</section>
    );
};

export default Statictics;