export const runtimeHandler = (data) => {
  let runtime = null; //variable fir dinamically render runtime or episode_run_time
  if (data) {
    if (data.runtime) {
      runtime = data.runtime + " min";
    }
    if (data.episode_run_time) {
      runtime = data.episode_run_time + " /ep";
    }
  }
  return runtime;
};
