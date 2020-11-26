// import { SportsLib } from "@sports-alliance/sports-lib";

// export function parseFile(file) {
//   const fileReader = new FileReader();
//   fileReader.onloadend = async (item) => {
//     // console.log(item);
//     const activity = await SportsLib.importFromFit(item.currentTarget.result);
//     // console.log(activity.toJSON());
//     activity.getActivities().map((a) => {
//       console.log(a.getPositionData());
//       console.log(a.getAllStreams());
//       console.log(a.generateTimeStream(["Latitude", "Longitude"]));
//       //   console.log(a.toJSON());
//       a.getLaps().map((l) => {
//         // console.log(l.toJSON());
//       });
//     });
//   };
//   fileReader.readAsArrayBuffer(file);
// }
