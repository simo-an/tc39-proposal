import { createDefer } from "../index";

/**
 * basic usage
 * @param duration
 * @returns
 */
function sleep(duration: number) {
  const defer = createDefer();
  try {
    const timer = setTimeout(defer.resolve, duration);

    defer.cancel = () => clearTimeout(timer);
  } catch (error) {
    defer.reject(error);
  }

  setTimeout(() => {
    console.log("sleep was canceled!");
    defer.cancel();
    defer.resolve();
  }, duration / 2);

  return defer.promise;
}

sleep(1000).then(() => {
  console.log("sleep 1000ms");
});
