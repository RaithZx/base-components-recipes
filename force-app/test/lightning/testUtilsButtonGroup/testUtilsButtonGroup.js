/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

const greek = [
    'alpha',
    'theta',
    'tau',
    'beta',
    'vartheta',
    'pi',
    'upsilon',
    'gamma',
    'iota',
    'varpi',
    'phi',
    'delta',
    'kappa',
    'rho',
    'varphi',
    'epsilon',
    'lambda',
    'varrho',
    'chi',
    'varepsilon',
    'mu',
    'sigma',
    'psi',
    'zeta',
    'nu',
    'varsigma',
    'omega',
    'eta',
    'xi',
    'Gamma',
    'Lambda',
    'Sigma',
    'Psi',
    'Delta',
    'Xi',
    'Upsilon',
    'Omega',
    'Theta',
    'Pi',
    'Phi'
];

export function generateRandomButtonsArray(size) {
    const returnArray = [];

    for (let i = 0; i < size; i++) {
        const letter = greek[Math.floor(Math.random() * greek.length)];
        returnArray.push({
            label: letter.charAt(0).toUpperCase() + letter.substr(1),
            value: letter,
            key: letter + Math.floor((1 + Math.random()) * 0x10000).toString(16)
        });
    }

    return returnArray;
}

export function generateRandomButtonStatefulsArray(size) {
    const returnArray = [];

    for (let i = 0; i < size; i++) {
        returnArray.push({
            labelWhenOff: 'Follow',
            labelWhenOn: 'Following',
            labelWhenHover: 'Unfollow',
            iconNameWhenOff: 'utility:add',
            iconNameWhenOn: 'utility:check',
            iconNameWhenHover: 'utility:close',
            key: Math.floor((1 + Math.random()) * 0x10000).toString(16)
        });
    }

    return returnArray;
}

export function generateRandomButtonIconsArray(size) {
    const returnArray = [];

    for (let i = 0; i < size; i++) {
        const iconName = randomIcon();
        returnArray.push({
            alternativeText: iconName,
            iconName,
            key: Math.floor((1 + Math.random()) * 0x10000).toString(16)
        });
    }

    return returnArray;
}

export function generateRandomButtonIconStatefulsArray(size) {
    const returnArray = [];

    for (let i = 0; i < size; i++) {
        const iconName = randomIcon();
        returnArray.push({
            alternativeText: iconName,
            iconName,
            selected: Math.random() < 0.5 ? true : false,
            key: Math.floor((1 + Math.random()) * 0x10000).toString(16)
        });
    }

    return returnArray;
}

export function generateRandomButtonMenusArray(size) {
    const returnArray = [];

    for (let i = 0; i < size; i++) {
        const min = Math.ceil(1);
        const max = Math.floor(6);
        const numMenuItems = Math.floor(Math.random() * (max - min + 1)) + min;

        returnArray.push({
            alternativeText: 'Show menu',
            key: Math.floor((1 + Math.random()) * 0x10000).toString(16),
            menuItems: generateRandomButtonsArray(numMenuItems)
        });
    }

    return returnArray;
}

const icons = {
    action: [
        'add_contact',
        'add_relationship',
        'announcement',
        'apex',
        'approval',
        'back',
        'call',
        'canvas',
        'change_owner',
        'change_record_type',
        'check',
        'clone',
        'close',
        'defer',
        'delete',
        'description',
        'dial_in',
        'download',
        'edit',
        'edit_groups',
        'edit_relationship',
        'email',
        'fallback',
        'filter',
        'flow',
        'follow',
        'following',
        'freeze_user',
        'goal',
        'google_news',
        'info',
        'join_group',
        'lead_convert',
        'leave_group',
        'log_a_call',
        'log_event',
        'manage_perm_sets',
        'map',
        'more',
        'new',
        'new_account',
        'new_campaign',
        'new_case',
        'new_child_case',
        'new_contact',
        'new_event',
        'new_group',
        'new_lead',
        'new_note',
        'new_notebook',
        'new_opportunity',
        'new_person_account',
        'new_task',
        'password_unlock',
        'preview',
        'priority',
        'question_post_action',
        'quote',
        'record',
        'refresh',
        'reject',
        'remove',
        'remove_relationship',
        'reset_password',
        'share',
        'share_file',
        'share_link',
        'share_poll',
        'share_post',
        'share_thanks',
        'sort',
        'submit_for_approval',
        'update',
        'update_status',
        'upload',
        'user',
        'user_activation',
        'view_relationship',
        'web_link'
    ],

    custom: [
        'custom1',
        'custom2',
        'custom3',
        'custom4',
        'custom5',
        'custom6',
        'custom7',
        'custom8',
        'custom9',
        'custom10',
        'custom11',
        'custom12',
        'custom13',
        'custom14',
        'custom15',
        'custom16',
        'custom17',
        'custom18',
        'custom19',
        'custom20',
        'custom21',
        'custom22',
        'custom23',
        'custom24',
        'custom25',
        'custom26',
        'custom27',
        'custom28',
        'custom29',
        'custom30',
        'custom31',
        'custom32',
        'custom33',
        'custom34',
        'custom35',
        'custom36',
        'custom37',
        'custom38',
        'custom39',
        'custom40',
        'custom41',
        'custom42',
        'custom43',
        'custom44',
        'custom45',
        'custom46',
        'custom47',
        'custom48',
        'custom49',
        'custom50',
        'custom51',
        'custom52',
        'custom53',
        'custom54',
        'custom55',
        'custom56',
        'custom57',
        'custom58',
        'custom59',
        'custom60',
        'custom61',
        'custom62',
        'custom63',
        'custom64',
        'custom65',
        'custom66',
        'custom67',
        'custom68',
        'custom69',
        'custom70',
        'custom71',
        'custom72',
        'custom73',
        'custom74',
        'custom75',
        'custom76',
        'custom77',
        'custom78',
        'custom79',
        'custom80',
        'custom81',
        'custom82',
        'custom83',
        'custom84',
        'custom85',
        'custom86',
        'custom87',
        'custom88',
        'custom89',
        'custom90',
        'custom91',
        'custom92',
        'custom93',
        'custom94',
        'custom95',
        'custom96',
        'custom97',
        'custom98',
        'custom99',
        'custom100'
    ],

    doctype: [
        'ai',
        'attachment',
        'audio',
        'box_notes',
        'csv',
        'eps',
        'excel',
        'exe',
        'flash',
        'gdoc',
        'gdocs',
        'gform',
        'gpres',
        'gsheet',
        'html',
        'image',
        'keynote',
        'link',
        'mp4',
        'overlay',
        'pack',
        'pages',
        'pdf',
        'ppt',
        'psd',
        'rtf',
        'slide',
        'stypi',
        'txt',
        'unknown',
        'video',
        'visio',
        'webex',
        'word',
        'xml',
        'zip'
    ],

    standard: [
        'account',
        'announcement',
        'answer_best',
        'answer_private',
        'answer_public',
        'approval',
        'apps',
        'apps_admin',
        'article',
        'avatar',
        'avatar_loading',
        'calibration',
        'call',
        'call_history',
        'campaign',
        'campaign_members',
        'canvas',
        'case',
        'case_change_status',
        'case_comment',
        'case_email',
        'case_log_a_call',
        'case_transcript',
        'client',
        'coaching',
        'connected_apps',
        'contact',
        'contract',
        'custom',
        'dashboard',
        'default',
        'document',
        'drafts',
        'email',
        'email_chatter',
        'empty',
        'endorsement',
        'environment_hub',
        'event',
        'feed',
        'feedback',
        'file',
        'flow',
        'folder',
        'forecasts',
        'generic_loading',
        'goals',
        'group_loading',
        'groups',
        'hierarchy',
        'home',
        'household',
        'insights',
        'investment_account',
        'lead',
        'link',
        'log_a_call',
        'marketing_actions',
        'merge',
        'metrics',
        'news',
        'note',
        'opportunity',
        'orders',
        'people',
        'performance',
        'person_account',
        'photo',
        'poll',
        'portal',
        'post',
        'pricebook',
        'process',
        'product',
        'question_best',
        'question_feed',
        'quotes',
        'recent',
        'record',
        'related_list',
        'relationship',
        'report',
        'reward',
        'sales_path',
        'scan_card',
        'service_contract',
        'skill_entity',
        'social',
        'solution',
        'sossession',
        'task',
        'task2',
        'team_member',
        'thanks',
        'thanks_loading',
        'today',
        'topic',
        'unmatched',
        'user',
        'work_order',
        'work_order_item'
    ],

    utility: [
        'add',
        'adduser',
        'announcement',
        'answer',
        'apex',
        'approval',
        'apps',
        'arrowdown',
        'arrowup',
        'attach',
        'back',
        'ban',
        'bold',
        'bookmark',
        'breadcrumbs',
        'broadcast',
        'brush',
        'bucket',
        'builder',
        'call',
        'capslock',
        'cases',
        'center_align_text',
        'change_owner',
        'change_record_type',
        'chart',
        'chat',
        'check',
        'checkin',
        'chevrondown',
        'chevronleft',
        'chevronright',
        'chevronup',
        'clear',
        'clock',
        'close',
        'comments',
        'company',
        'connected_apps',
        'contract',
        'contract_alt',
        'copy',
        'crossfilter',
        'custom_apps',
        'cut',
        'dash',
        'database',
        'datadotcom',
        'dayview',
        'delete',
        'deprecate',
        'description',
        'desktop',
        'dislike',
        'dock_panel',
        'down',
        'download',
        'edit',
        'edit_form',
        'email',
        'emoji',
        'end_call',
        'erect_window',
        'error',
        'event',
        'expand',
        'expand_alt',
        'fallback',
        'favorite',
        'feed',
        'file',
        'filter',
        'filterList',
        'flow',
        'forward',
        'frozen',
        'full_width_view',
        'groups',
        'help',
        'home',
        'identity',
        'image',
        'inbox',
        'info',
        'info_alt',
        'insert_tag_field',
        'insert_template',
        'italic',
        'jump_to_bottom',
        'jump_to_top',
        'justify_text',
        'kanban',
        'keyboard_dismiss',
        'knowledge_base',
        'layers',
        'layout',
        'left',
        'left_align_text',
        'level_up',
        'like',
        'link',
        'list',
        'location',
        'lock',
        'log_a_call',
        'logout',
        'magicwand',
        'mark_all_as_read',
        'matrix',
        'merge',
        'metrics',
        'minimize_window',
        'moneybag',
        'monthlyview',
        'move',
        'muted',
        'new',
        'new_window',
        'news',
        'note',
        'notebook',
        'notification',
        'office365',
        'offline',
        'offline_cached',
        'open',
        'open_folder',
        'opened_folder',
        'overflow',
        'package',
        'package_org',
        'package_org_beta',
        'page',
        'palette',
        'paste',
        'people',
        'phone_landscape',
        'phone_portrait',
        'photo',
        'picklist',
        'power',
        'preview',
        'priority',
        'process',
        'push',
        'puzzle',
        'question',
        'questions_and_answers',
        'quotation_marks',
        'record',
        'record_create',
        'redo',
        'refresh',
        'relate',
        'remove_formatting',
        'remove_link',
        'replace',
        'reply',
        'reply_all',
        'reset_password',
        'resource_absence',
        'resource_capacity',
        'resource_territory',
        'retweet',
        'richtextbulletedlist',
        'richtextindent',
        'richtextnumberedlist',
        'richtextoutdent',
        'right',
        'right_align_text',
        'rotate',
        'rows',
        'salesforce1',
        'search',
        'settings',
        'setup',
        'setup_assistant_guide',
        'share',
        'share_mobile',
        'share_post',
        'shield',
        'side_list',
        'signpost',
        'sms',
        'snippet',
        'socialshare',
        'sort',
        'spinner',
        'standard_objects',
        'stop',
        'strikethrough',
        'success',
        'summary',
        'summarydetail',
        'switch',
        'sync',
        'table',
        'tablet_landscape',
        'tablet_portrait',
        'tabset',
        'task',
        'text_background_color',
        'text_color',
        'threedots',
        'threedots_vertical',
        'thunder',
        'tile_card_list',
        'topic',
        'touch_action',
        'trail',
        'turn_off_notifications',
        'undelete',
        'undeprecate',
        'underline',
        'undo',
        'unlock',
        'unmuted',
        'up',
        'upload',
        'user',
        'user_role',
        'video',
        'volume_high',
        'volume_low',
        'volume_off',
        'warning',
        'weeklyview',
        'wifi',
        'work_order_type',
        'world',
        'yubi_key',
        'zoomin',
        'zoomout'
    ]
};

function randomIcon() {
    const keys = Object.keys(icons);
    const randomKey = keys[(keys.length * Math.random()) << 0];
    const randomIconName =
        icons[randomKey][Math.floor(Math.random() * icons[randomKey].length)];

    return randomKey + ':' + randomIconName;
}
