require('reify')

import * as dev from '@gramps/cli/bin/dev'

export const command = 'gramps'

export const describe = 'gramps'

export const builder = args => args
    .command({ 
        command: dev.command,
        description: dev.description,
        builder: dev.builder,
        handler: dev.handler
    })