export const LOGO = 'logo.png'
export const getColorClass = (state: string): string => {
    switch (state) {
        case 'Running':
            return 'running';
        case 'Alarm':
            return 'alarm';
        case 'Warning':
            return 'warning';
        default:
            return 'default';
    }
}

export const getIcon = (state: string): string => {
    switch (state) {
        case 'Running':
            return 'autorenew';
        case 'Alarm':
            return 'error';
        case 'Warning':
            return 'warning';
        default:
            return 'help';
    }
}

export const getStatusIcon = (name: string): string => {
    switch (name) {
        case 'Scale':
            return 'system_update_alt'
        case 'Attacher':
            return 'report_problem'
        case 'Packer':
            return 'archive'
        case 'Closer':
            return 'warning'
        default:
            return 'system_update_alt'
    }
}