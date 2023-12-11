import { useNavigate } from 'react-router';

import { useCallback } from 'react';

import PATHNAME from '../constants/pathname';

export default function useHandleNavigate() {
  const navigate = useNavigate();

  const handleNavigate = useCallback(
    (path: keyof typeof PATHNAME, id?: Nullable<string>, replace?: boolean) => {
      const url = id ? `${PATHNAME[path]}/${id}` : PATHNAME[path];

      if (replace) {
        navigate(url, { replace: true });
      } else {
        navigate(url);
      }
    },
    [],
  );

  return { handleNavigate };
}
