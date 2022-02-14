import { useMemo } from 'react'
import { Filters, useFilters, FiltersAction, FiltersField, Option } from "@smartb/g2-forms"
import { parse } from "qs"
import { burst, SSM, SsmPath, Transition } from 'ssm'
import { distinct } from 'utils'

type SessionsFiltersValues = {
    from?: Date
    to?: Date
    channel?: string[]
    engine?: string[]
    currentStep?: string[]
}

export type SessionsFilters = {
    from?: number
    to?: number
    channel?: string[]
    engine?: string[]
    currentStep?: string[]
}

interface SessionsFiltersProps {
    onSubmit: (values: SessionsFilters) => void
    currentSSM: SSM
    ssmList: Map<SsmPath, SSM>
}

export const SessionsFilters = (props: SessionsFiltersProps) => {
    const { onSubmit,  currentSSM, ssmList} = props
    
    const fields = useMemo((): FiltersField[] => {
        const params = parse(window.location.search, { ignoreQueryPrefix: true })
        let stepOptions: Option[] = []
        currentSSM.ssm.transitions.forEach((transition: Transition) => {
            stepOptions.push({
                key: transition.from,
                label: transition.from,
            })
            stepOptions.push({
                key: transition.to,
                label: transition.to,
            })
        })
        stepOptions = distinct<Option>(stepOptions, (it) => it.key)
        let chaincodes: Option[] = []
        let channels: Option[] = []
        Array.from(ssmList.keys()).forEach((uri) => {
            const parsed = burst({uri: uri})
            chaincodes.push({
                key: parsed.chaincodeId,
                label: parsed.chaincodeId
            })
            channels.push({
                key: parsed.channelId,
                label: parsed.channelId
            })
        })
        chaincodes = distinct<Option>(chaincodes, (it) => it.key)
        channels = distinct<Option>(channels, (it) => it.key)
        return [
            {
                key: "x2_sessions_filters_from",
                name: "from",
                label: "From",
                defaultValue: typeof params.from === "string" ? new Date(Number(params.from)) : undefined,
                type: "datepicker"
            },
            {
                key: "x2_sessions_filters_to",
                name: "to",
                label: "To",
                defaultValue: typeof params.to === "string" ? new Date(Number(params.to)) : undefined,
                type: "datepicker"
            },
            {
                key: "x2_sessions_filters_channel",
                name: "channel",
                label: "Channel",
                defaultValue: Array.isArray(params.channel) ? params.channel : typeof params.channel === "string" ? [params.channel] : undefined,
                type: "select",
                selectProps: {
                    options: channels,
                    multiple: true
                }
            },
            {
                key: "x2_sessions_filters_engine",
                name: "engine",
                label: "Protocol engine",
                defaultValue: Array.isArray(params.engine) ? params.engine : typeof params.engine === "string" ? [params.engine] : undefined,
                type: "select",
                selectProps: {
                    options: chaincodes,
                    multiple: true
                }
            },
            {
                key: "x2_sessions_filters_currentStep",
                name: "currentStep",
                label: "Current step",
                defaultValue: Array.isArray(params.currentStep) ? params.currentStep : typeof params.currentStep === "string" ? [params.currentStep] : undefined,
                type: "select",
                selectProps: {
                    options: stepOptions,
                    multiple: true
                }
            }
        ]
    }, [currentSSM, ssmList])

    const formState = useFilters({
        fields: fields,
        onSubmit: (values: SessionsFiltersValues) => {
            const params: {from?: number, to?: number} = {}
            if (values.from) params.from = values.from.getTime()
            if (values.to) params.to = values.to.getTime()
            onSubmit({...values, ...params} as SessionsFilters)
        }
    })

    const actions = useMemo((): FiltersAction[] => [
        {
            label: 'reset',
            key: 'resetFiltersButton',
            variant: "text",
            onClick: () => {
                formState.setValues({from: "", to: "", channel: [], engine: [], currentStep: []})
                formState.submitForm()
            }
        }
    ], [formState.resetForm])

    return (
        <Filters
            fields={fields}
            formState={formState}
            actions={actions}
        />
    )
}
