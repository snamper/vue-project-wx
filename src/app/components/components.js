import demoRouter from './demo/demo';
import newRouter from './news/news';
import maintenanceRouter from './maintenance/maintenance';
import statisticsRouter from './statistics/statistics';

let componentsModule=[];
componentsModule=componentsModule.concat(
    demoRouter,
    newRouter,
    maintenanceRouter,
    statisticsRouter,
);

export default componentsModule;