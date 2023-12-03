# -*- coding: utf-8 -*-

{
    'name': 'Disallow Duplicate Functionality for Certain Group of Users, for Certain Model',
    'version': '1.0',
    'sequence': -100,
    'category': 'Accounting/Accounting',
    'summary': '',
    'description': """
    """,
    'depends': ['sale', 'point_of_sale'],
    'data': [
        'security/security.xml',

             ],
        'assets': {
        'web.assets_backend': [
            'disallow_duplicate/static/src/js/DisallowGroupFromDuplicating.js'
        ],
        'point_of_sale.assets': [

            ],
        },
    'installable': True,
    'application': True,
    'auto_install': False,
    'license': 'LGPL-3',
}
