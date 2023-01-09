import axios from 'axios';
import React from 'react';
import { useDispatch } from 'react-redux';
import { addTestimonial } from 'store/actions/common';
import { useGetTestimonial } from 'store/selectors/common';

const useFetchTestimonial = () => {
  const [isSuccess, setIssuccess] = React.useState();
  const dispatch = useDispatch();
  const testimonials = useGetTestimonial();

  React.useEffect(() => {
    if (testimonials?.length > 0) {
      setIssuccess(true);
      return;
    }
    axios
      .get('https://vnguyen.xyz/huy/day17/apis/index.php?type=home')
      .then((res) => {
        dispatch(addTestimonial({ testimonials: res.data.data.testimonial }));
        setIssuccess(true);
      })
      .catch(() => setIssuccess(false));
  }, [testimonials?.length, dispatch]);

  return { testimonials, isSuccess };
};

export default useFetchTestimonial;
