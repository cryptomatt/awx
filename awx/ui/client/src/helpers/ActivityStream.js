/*************************************************
 * Copyright (c) 2016 Ansible, Inc.
 *
 * All Rights Reserved
 *************************************************/

 /**
 * @ngdoc function
 * @name helpers.function:ActivityStream
 * @description Helper functions for the activity stream
*/

export default
    angular.module('ActivityStreamHelper', ['Utilities'])
        .factory('GetTargetTitle', [
            function () {
                return function (target) {

                    var rtnTitle = 'DASHBOARD';

                    switch(target) {
                        case 'project':
                            rtnTitle = 'PROJECTS';
                            break;
                        case 'inventory':
                            rtnTitle = 'INVENTORIES';
                            break;
                        case 'job_template':
                            rtnTitle = 'JOB TEMPLATES';
                            break;
                        case 'credential':
                            rtnTitle = 'CREDENTIALS';
                            break;
                        case 'user':
                            rtnTitle = 'USERS';
                            break;
                        case 'team':
                            rtnTitle = 'TEAMS';
                            break;
                        case 'organization':
                            rtnTitle = 'ORGANIZATIONS';
                            break;
                        case 'management_job':
                            rtnTitle = 'MANAGEMENT JOBS';
                            break;
                        case 'inventory_script':
                            rtnTitle = 'INVENTORY SCRIPTS';
                            break;
                        case 'schedule':
                            rtnTitle = 'SCHEDULES';
                            break;
                    }

                    return rtnTitle;

                };
            }
        ]);