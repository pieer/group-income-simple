<template lang="pug">
proposal-template(
  title= 'Change Rule to change Rule'
  footer='According to your voting rules, 8 out of 10 members will have to agree with this.'
  :disabled='$v.form.$invalid || ($v.steps[config.steps[currentStep]] && $v.steps[config.steps[currentStep]].$invalid)'
  :maxSteps='config.steps.length'
  :currentStep.sync='currentStep'
  @submit='submit'
)

  .field(v-if='currentStep === 0' key='0')
    label.label I step to change rule of change rule it's on the way

  .field(v-if='currentStep === 1' key='1')
    label.label
      i18n Why are you proposing this change?

    textarea.textarea(
      name='changeReason'
      ref='purpose'
      placeholder='The reason why I\' propositiong this change is...'
      :class="{ 'error': $v.form.changeReason.$error }"
      v-model='form.changeReason'
    )
</template>

<script>
import ProposalTemplate from './ProposalTemplate.vue'
import { validationMixin } from 'vuelidate'
import { minLength } from 'vuelidate/lib/validators'

export default {
  name: 'ProposalChangeRule',
  components: {
    ProposalTemplate
  },
  mixins: [
    validationMixin
  ],
  data () {
    return {
      currentStep: 0,
      v: { type: Object },
      form: {
        changeReason: null
      },
      ephemeral: {
        errorMsg: null,
        // this determines whether or not to render proxy components for nightmare
        dev: process.env.NODE_ENV === 'development'
      },
      config: {
        steps: [
          'AddMemberRule',
          'ChangeReason'
        ]
      }
    }
  },
  methods: {
    submit () {
      console.log('TODO: Logic to Propose a new rule to change a rule')
    }
  },
  validations: {
    form: {
      changeReason: {
        minLength: minLength(10)
      }
    },
    // validation groups by route name for steps
    steps: {
      AddMemberRule: [],
      Reason: [
        'form.changeReason'
      ]
    }
  }
}
</script>
