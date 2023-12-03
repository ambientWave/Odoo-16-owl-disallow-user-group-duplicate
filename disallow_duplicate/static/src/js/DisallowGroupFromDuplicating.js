/** @odoo-module **/

import session from 'web.session';
import rpc from 'web.rpc';
import { ActionMenus } from "@web/search/action_menus/action_menus";
import { FormController } from '@web/views/form/form_controller'; // addons/web/static/src/views/form/form_controller.js
import { ListController } from "@web/views/list/list_controller";
import { patch } from '@web/core/utils/patch';

import {ListModel} from 'web.ListModel'; // addons/web/static/src/legacy/js/views/list/list_model.js
import {BasicModel} from 'web.BasicModel'; // addons/web/static/src/legacy/js/views/basic/basic_view.js
import {BasicView} from 'web.BasicView'; // addons/web/static/src/legacy/js/views/basic/basic_view.js

    
     patch(FormController.prototype, 'disallowUsersFromDuplicatingSalesOrders', {
        /**
         * @override
         */
        
        async duplicateRecord() {
            
            const self = this;
            const currentModel = this.model.root.resModel;
            const currentModelData = this.model.root.data


            
            await rpc.query({
             model: 'res.groups',
             method: 'search_read',
             args: [[['name', '=', 'Disallowed User to Duplicate Sale Orders']]],
         }).then(function(returnedValueReturnedByCustomPythonMethod) {
            if((returnedValueReturnedByCustomPythonMethod[0].users).includes(session.uid) && currentModel == 'sale.order') {
                alert('You are not allowed to duplicate this record')
            } else {
                return self.model.root.duplicate();

            }
         });

        }
    })