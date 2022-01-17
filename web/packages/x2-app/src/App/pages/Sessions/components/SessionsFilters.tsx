import { useMemo } from 'react'
import { Filters, useFilters, FiltersAction, FiltersField } from "@smartb/g2-forms"
import { parse } from "qs"
import { SsmUriDTO } from "ssm";

type SessionsFiltersValues = {
    from?: Date
    to?: Date
    channel?: string[]
    engine?: string[]
    currentStep?: string[]
}

interface SessionsFiltersProps {
    gotoSessions: (ssmUri: SsmUriDTO, params: Object) => void
    ssmUri: SsmUriDTO
}

export const SessionsFilters = (props: SessionsFiltersProps) => {
    const { gotoSessions, ssmUri } = props

    const fields = useMemo((): FiltersField[] => {
        const params = parse(window.location.search, { ignoreQueryPrefix: true })
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
                    options: [{ key: "example1", label: 'example1' }, { key: "example2", label: 'example2' }, { key: "example3", label: 'example3' }],
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
                    options: [{ key: "example1", label: 'example1' }, { key: "example2", label: 'example2' }, { key: "example3", label: 'example3' }],
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
                    options: [{ key: "example1", label: 'example1' }, { key: "example2", label: 'example2' }, { key: "example3", label: 'example3' }],
                    multiple: true
                }
            }
        ]
    }, [])

    const formState = useFilters({
        fields: fields,
        onSubmit: (values: SessionsFiltersValues) => {
            const params: {from?: number, to?: number} = {}
            if (values.from) params.from = values.from.getTime()
            if (values.to) params.to = values.to.getTime()
            gotoSessions(ssmUri, {...values, ...params})
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
